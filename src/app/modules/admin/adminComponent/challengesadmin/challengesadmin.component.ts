import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Challenges } from '../../model/challenges';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-challengesadmin',
  templateUrl: './challengesadmin.component.html',
  styleUrls: ['./challengesadmin.component.css']
})
export class ChallengesAdminComponent implements OnInit {

  [x: string]: any;
  fileToUpload: File = null;
  PostImagePath: any;
  challengesForm: FormGroup;
  challenges: Challenges = new Challenges();
  submitted = false;
  titleAlert: string = 'This field is required';

  constructor(public formBuilder: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (files != null && files.length > 0) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.ImagePath = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.route.params.subscribe((params: Params) => {
      this.ID = params.id;

    });
    if (this.ID != null) {
      this.loadChallanges(this.ID);
    }
    this.challengesForm = this.formBuilder.group({
      ChallengeName: new FormControl('', Validators.required),
      ChallengeImage: new FormControl(''),
      IsActive: new FormControl(''),
    }, null);
    this.loadChallanges(this.ID);
  }
  get f() {
    return this.challengesForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.challengesForm.invalid) {
      return;
    }
    if (this.fileToUpload != null) {

      this.adminService.postImage(this.fileToUpload).subscribe(res => {
        if (res) {

          this.Image = res;
          this.updateData();

        }
      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      this.updateData();
    }
  }
  updateData() {
    var data = this.challenges;
    data["Image"] = this.Image;

    if (this.ID == null) {
      this.adminService.submitChallenges(data).subscribe(res => {
        if (res.Status) {
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/challengeslist']);
          // this.challengesForm.reset();
        }
        this.challengesForm.reset();
      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      data["ID"] = this.ID;

      this.adminService.updateChallenges(data).subscribe(res => {
        if (res.Status) {

          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/challengeslist']);
          // this.challengesForm.reset();
        }
        this.challengesForm.reset();
      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }


  loadChallanges(id) {
    this.adminService.loadChallanges(id).subscribe(res => {
      console.log('ID', id);
      if (res.Status) {
        this.challenges = res.Data.challenges;



      }
    }, error => {

      console.log('error', error);
    })
  }


}
