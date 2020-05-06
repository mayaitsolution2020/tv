import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ViewClass } from '../../model/viewclass';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})

export class AddClassComponent implements OnInit {

  [x: string]: any;
  fileToUpload: File = null;
  PostImagePath: any;
  classMeetingForm: FormGroup;
  classmeeting: ViewClass = new ViewClass();
  submitted = false;
  Date = new FormControl((new Date()).toISOString());
  titleAlert: string = 'This field is required';

  constructor(public formBuilder: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute,
    public router: Router,
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
    this.Image = this.classmeeting.Image;
    this.route.params.subscribe((params: Params) => {
      this.ID = params.id;

    });
    if (this.ID != null) {
      this.loadClassInfo(this.ID);
    }

    this.classMeetingForm = this.formBuilder.group({
      Title: new FormControl('', Validators.required),
      Description: new FormControl(''),
      WebinarLink: new FormControl(''),
      PublishedDate: new FormControl(''),
      SortOrder: new FormControl(''),
      Image: new FormControl(''),
    }, null);
    this.loadClassInfo(this.ID);

  }

  get f() {
    return this.classMeetingForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.classMeetingForm.invalid) {
      return;
    }


    this.Image = this.classmeeting.Image;
    if (this.fileToUpload != null) {


      console.log('Image from api', this.fileToUpload);
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
    var data = this.classmeeting;
    data["Image"] = this.Image;
    //const pdate=this.classmeeting.PublishedDate.utc();
    data["PublishedDate"] = this.classmeeting.PublishedDate;

    if (this.ID == null) {
      this.adminService.submitClass(data).subscribe(res => {
        if (res.Status) {
          console.log('data', data);
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/viewclass']);
        }

      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
    else {
      data["Image"] = this.Image;
      data["ID"] = this.ID;
      this.adminService.updateClassInfo(data).subscribe(res => {
        if (res.Status) {
          console.log('this.response', data);
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/viewclass']);
        }
        // this.classMeetingForm.reset();
      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }


  loadClassInfo(id) {
    this.adminService.loadClassInfo(id).subscribe(res => {
      if (res.Status) {
        this.classmeeting = res.Data.classmeetingData;
      }
    }, error => {
      console.log('error', error);
    })
  }
}
