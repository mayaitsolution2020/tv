import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Post } from '../../model/Post';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-posttransformation',
  templateUrl: './posttransformation.component.html',
  styleUrls: ['./posttransformation.component.css']
})
export class PostTransformationComponent implements OnInit {
  [x: string]: any;
  Title: any;
  fileToUpload: File = null;
  PostImagePath: any;
  postForm: FormGroup;
  postModel: Post = new Post();
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
      this.loadPost(this.ID);
    }
    this.postForm = this.formBuilder.group({
      Title: new FormControl('', Validators.required),
      Embed_Code: new FormControl(''),
      PublishedDate: new FormControl(''),
      SortOrder: new FormControl(''),
      Image: new FormControl(''),
      Description: new FormControl(''),

    }, null);
    this.loadPost(this.ID);
  }
  get f() {
    return this.postForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.postForm.invalid) {
      return;
    }
    this.Image = this.postModel.Image;
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
    var data = this.postModel;
    data["Image"] = this.Image;
    if (this.ID == null) {
      this.adminService.submitTransformationPost(data).subscribe(res => {
        if (res.Status) {
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/postlist']);
        }

      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      data["ID"] = this.ID;
      this.adminService.updateTransformationPost(data).subscribe(res => {
        if (res.Status) {
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/postlist']);
        }

      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }



  loadPost(id) {
    this.adminService.loadPost(id).subscribe(res => {
      if (res.Status) {
        this.postModel = res.Data.postData;

        this.postForm.patchValue({
          Image: this.postModel['Image'],
        });
      }
    }, error => {
      console.log('error', error);
    })
  }


}