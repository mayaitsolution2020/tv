import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Users } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  [x: string]: any;
  fileToUpload: File = null;
  PostImagePath: any;
  userForm: FormGroup;
  userModel: Users = new Users();
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
    this.Image = this.userModel.Image;
    this.route.params.subscribe((params: Params) => {
      this.ID = params.id;

    });
    if (this.ID != null) {
      this.loadUserInfo(this.ID);
    }

    this.userForm = this.formBuilder.group({
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
      UserName: new FormControl(''),
      Email: new FormControl(''),
      Password: new FormControl(''),
      Status: new FormControl(''),
      Address: new FormControl(''),
      Phone: new FormControl(''),
      Image: new FormControl(''),
    }, null);
    this.loadUserInfo(this.ID);

  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      return;
    }


    this.Image = this.userModel.Image;
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
    var data = this.userModel;
    data["Image"] = this.Image;
    //const pdate=this.userModel.PublishedDate.utc();
    // data["PublishedDate"] = this.userModel.PublishedDate;

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
      this.adminService.updateUser(data).subscribe(res => {
        if (res.Status) {
          console.log('this.response', data);
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/userlist']);
        }
        // this.userForm.reset();
      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }


  loadUserInfo(id) {
    this.adminService.loadUserInfo(id).subscribe(res => {
      if (res.Status) {
        this.userModel = res.Data.userData;
      }
    }, error => {
      console.log('error', error);
    })
  }
}

