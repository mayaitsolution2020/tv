import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { TransformationAdmin } from 'src/app/modules/admin/model/transformationadmin';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-transformationadmin',
  templateUrl: './transformationadmin.component.html',
  styleUrls: ['./transformationadmin.component.css']
})
export class TransformationAdminComponent implements OnInit {
  [x: string]: any;
  Title: any;
  fileToUpload: File = null;
  PostImagePath: any;
  transformationsForm: FormGroup;
  transformation: TransformationAdmin = new TransformationAdmin();
  submitted = false;
  titleAlert: string = 'This field is required';
  Date = new FormControl(new Date());
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
      this.loadTransformation(this.ID);
    }
    this.transformationsForm = this.formBuilder.group({
      Title: new FormControl('', Validators.required),
      Slug: new FormControl(''),
      PublishedDate: new FormControl(''),
      SortOrder: new FormControl(''),
      Image: new FormControl(''),

    }, null);
    this.loadTransformation(this.ID);
  }
  get f() {
    return this.transformationsForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.transformationsForm.invalid) {
      return;
    }
    this.Image = this.transformation.Image;

    if (this.fileToUpload != null) {
      this.baseUrl = environment.baseUrl;
      this.adminService.postImage(this.fileToUpload).subscribe(res => {
        if (res) {
          this.Image = res;
          this.updateData();
        }
        else {
          this.toastr.error('Image not saved!!');
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
    var data = this.transformation;
    data["Image"] = this.Image;
    if (this.ID == null) {
      this.adminService.submitTransformation(data).subscribe(res => {
        if (res.Status) {
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/transformationlist']);
        }

      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      data["ID"] = this.ID;
      this.adminService.updateTransformation(data).subscribe(res => {
        if (res.Status) {
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/transformationlist']);
        }

      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }



  loadTransformation(id) {
    this.adminService.loadTransformation(id).subscribe(res => {
      if (res.Status) {
        this.transformation = res.Data.transData;

        this.transformationsForm.patchValue({
          Image: this.transformation['Image'],
        });
      }
    }, error => {
      console.log('error', error);
    })
  }


}