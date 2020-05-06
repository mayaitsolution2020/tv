import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { PinkAffiliate } from '../../model/pinkaffiliates';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pinkaffiliateadmin',
  templateUrl: './pinkaffiliateadmin.component.html',
  styleUrls: ['./pinkaffiliateadmin.component.css']
})
export class PinkaffiliateAdminComponent implements OnInit {
  [x: string]: any;
  fileToUpload: File = null;
  PostImagePath: any;
  pinkAfflicateForm: FormGroup;
  pinkAfflicate: PinkAffiliate = new PinkAffiliate();
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

    });
    if (this.ID != null) {
      this.loadPinkAffiliate(this.ID);
    }
    this.pinkAfflicateForm = this.formBuilder.group({
      Title: new FormControl('', Validators.required),
      Slug: new FormControl(''),
      PublishedDate: new FormControl(''),
      SortOrder: new FormControl(''),
      Image: new FormControl(''),

    }, null);
    this.loadPinkAffiliate(this.ID);

  }

  get f() {
    return this.pinkAfflicateForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.pinkAfflicateForm.invalid) {
      return;
    }
    this.Image = this.pinkAfflicate.Image;
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
    var data = this.pinkAfflicate;
    data["Image"] = this.Image;
    if (this.ID == null) {
      this.adminService.submitPinkAfflicates(data).subscribe(res => {
        if (res.Status) {
          console.log('Data', data);
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/pinkaffiliatelist']);
          // this.pinkAfflicateForm.reset();
        }

      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      data["Image"] = this.Image;
      data["ID"] = this.ID;
      console.log('Final Data3', data);
      this.adminService.updatePinkAfflicate(data).subscribe(res => {
        if (res.Status) {
          console.log('this.response', data);
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/pinkaffiliatelist']);
        }

      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }


  loadPinkAffiliate(id) {
    this.adminService.loadPinkAffiliate(id).subscribe(res => {

      if (res.Status) {
        this.pinkAfflicate = res.Data.affiliateData;
      }
    }, error => {

      console.log('error', error);
    })
  }



}
