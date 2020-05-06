import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { VideosData } from '../../model/videos';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-motivationmusic',
  templateUrl: './motivationmusic.component.html',
  styleUrls: ['./motivationmusic.component.css']
})
export class MotivationMusicComponent implements OnInit {

  [x: string]: any;
  selected: 'true';
  fileToUpload: File = null;
  PostImagePath: any;
  SortOrder: any;
  motivationMusicForm: FormGroup;
  video: VideosData = new VideosData();
  submitted = false;
  titleAlert: string = 'This field is required';
  model: any = {};
  Selected: boolean;
  videoType: number;
  videoList: VideosData = new VideosData();
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
      this.VideoID = params.id;
      this.videoType = this.video.VideoType;
    });
    if (this.VideoID != null) {
      this.loadVideo(this.VideoID);
    }
    this.motivationMusicForm = this.formBuilder.group({
      Title: new FormControl('', Validators.required),
      Description: new FormControl(''),
      Embed_Code: new FormControl(''),
      SortOrder: new FormControl(''),
      Image: new FormControl(''),
      VideoType: new FormControl(''),
      Levels: new FormControl(''),
      ExpiresDate: new FormControl(''),
      Prerecord_Video_Image: new FormControl(''),
      ResourceUrl: new FormControl(''),
      IsActive: new FormControl(''),
      StartDate: new FormControl(''),
      StartTime: new FormControl(''),
      EndDate: new FormControl(''),
      EndTime: new FormControl(''),
    }, null);
    this.loadVideo(this.VideoID);
  }
  get f() {
    return this.motivationMusicForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.motivationMusicForm.invalid) {
      return;
    }
    this.Prerecord_Video_Image = this.video.Prerecord_Video_Image;
    this.VideoType = this.video.VideoType;
    if (this.fileToUpload != null) {
      this.adminService.postImage(this.fileToUpload).subscribe(res => {
        if (res) {
          this.Prerecord_Video_Image = res;
          this.updateData();
        }
      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      this.updateData()
    }
  }

  updateData() {
    var data = this.video;
    data["Prerecord_Video_Image"] = this.Prerecord_Video_Image;
    data.VideoType = 3;
    if (this.VideoID == null) {
      this.adminService.submitVideo(data).subscribe(res => {
        if (res.Status) {

          console.log('Data', data);
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/musiclist']);
        }
        // this.motivationMusicForm.reset();
      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      data["VideoID"] = this.VideoID;
      data["Prerecord_Video_Image"] = this.Prerecord_Video_Image;
      this.adminService.updateVideo(data).subscribe(res => {
        if (res.Status) {

          console.log('this.response', data);
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/musiclist']);
        }
        // this.motivationMusicForm.reset();
      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }


  loadVideo(id) {
    this.adminService.loadVideo(id).subscribe(res => {
      if (res.Status) {
        this.video = res.Data.videoData;
        this.VideoType = res.Data.videoData.VideoType;

      }
    }, error => {
      console.log('error', error);
    })
  }


}