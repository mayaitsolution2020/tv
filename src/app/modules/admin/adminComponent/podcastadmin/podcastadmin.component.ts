import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PodcastsData } from '../../model/podcasts';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-podcastadmin',
  templateUrl: './podcastadmin.component.html',
  styleUrls: ['./podcastadmin.component.css']
})
export class PodcastAdminComponent implements OnInit {


  [x: string]: any;
  selected: any[];

  fileToUpload: File = null;
  PostImagePath: any;
  podcastForm: FormGroup;
  podcast: PodcastsData = new PodcastsData();
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
      this.PodcastID = params.id;

    });

    if (this.PodcastID != null) {
      this.loadPodcast(this.PodcastID);
    }
    this.podcastForm = this.formBuilder.group({
      Title: new FormControl('', Validators.required),
      PodcastType: new FormControl(''),

      Description: new FormControl(''),
      Embed_Code: new FormControl(''),
      SortOrder: new FormControl(''),
      Image: new FormControl(''),
    }, null);
    this.loadPodcast(this.PodcastID);
  }
  get f() {
    return this.podcastForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.podcastForm.invalid) {
      return;
    }
    this.Image = this.podcast.Image;
    this.PodcastType = this.podcast.PodcastType;
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
    var data = this.podcast;
    data["Image"] = this.Image;
    if (this.PodcastID == null) {
      this.adminService.submitPodCast(data).subscribe(res => {
        if (res.Status) {
          console.log('Data', data);
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/podcastlist']);
        }

      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      data["PodcastID"] = this.PodcastID;
      this.adminService.updatePodcast(data).subscribe(res => {
        if (res.Status) {
          console.log('this.response', data);
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/podcastlist']);
        }

      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }


  loadPodcast(id) {
    this.adminService.loadPodcast(id).subscribe(res => {
      if (res.Status) {
        this.podcast = res.Data.podcastData;

      }
    }, error => {
      console.log('error', error);
    })
  }


}
