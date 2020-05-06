import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Testimony } from '../../model/testimony';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {
  [x: string]: any;
  fileToUpload: File = null;
  filePdfUpload: File = null;
  PostImagePath: any;
  testimonieForm: FormGroup;
  testimony: Testimony = new Testimony();
  submitted = false;
  titleAlert: string = 'This field is required';
  date = new FormControl(new Date());

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
      console.log('para', this.ID)
    });
    if (this.ID != null) {
      this.loadTestimonie(this.ID);
    }
    this.testimonieForm = this.formBuilder.group({
      Title: new FormControl('', Validators.required),
      Slug: new FormControl(''),

      PublishedDate: new FormControl(''),

      SortOrder: new FormControl(''),
      Image: new FormControl(''),



    }, null);
    this.loadTestimonie(this.ID);
  }
  get f() {
    return this.testimonieForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.testimonieForm.invalid) {
      return;
    }
    this.Image = this.testimony.Image;
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
    var data = this.testimony;
    data["Image"] = this.Image;
    if (this.ID == null) {
      this.adminService.submitTestimonie(data).subscribe(res => {
        if (res.Status) {
          console.log('this.response', data);
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/testimonylist']);
        }
        // this.testimonieForm.reset();
      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      data["ID"] = this.ID;
      console.log('Final Data3', data);
      this.adminService.updateTestimonie(data).subscribe(res => {
        if (res.Status) {
          console.log('this.response', data);
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/testimonylist']);
        }
        // this.testimonieForm.reset();
      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }


  loadTestimonie(id) {
    this.adminService.loadTestimonie(id).subscribe(res => {
      if (res.Status) {
        this.testimony = res.Data.testimonieData;
      }
    }, error => {
      console.log('error', error);
    })
  }


}