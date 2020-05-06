import { Component, OnInit, ViewChild, ElementRef, Inject, Pipe } from '@angular/core';
import { videoData, playVideo } from 'src/app/modules/public/model/video';
import { PublicService } from '../../public.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
@Pipe({
  name: 'safe'
})

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  baseUrl: any;
  page: number = 1;
  selectedItem: string[] = ['MOTIVATION', 'WE FIXED IT'];
  selectedTab = this.selectedItem[0];
  motivationvideos: videoData;
  wefixeditvideos: videoData;
  VideoID: any;
  constructor(
    private route: ActivatedRoute,
    private publicservice: PublicService,
    public router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getWeFixedItVideos();
    this.getMotivationVideos();
  }
  openDialog(VideoID): void {

    const dialogRef = this.dialog.open(PlayVideoComponent, {
      data: { VideoID: VideoID }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getWeFixedItVideos() {
    this.publicservice.getWeFixedItVideos().subscribe(res => {
      if (res.Status) {
        this.wefixeditvideos = res.Data;
        this.VideoID = res.Data.VideoID;
        console.log('getWeFixedItVideos', res.Data);

      }
    }, error => {
      console.log('error', error);
    })
  }

  getMotivationVideos() {
    this.publicservice.getMotivationVideos().subscribe(res => {
      if (res.Status) {
        this.motivationvideos = res.Data;
        this.VideoID = res.Data.VideoID;
        console.log('getMotivationVideos', res.Data);
      }
    }, error => {
      console.log('error', error);
    })
  }
}

@Component({
  selector: 'app-playvideo',
  templateUrl: './playvideo.html',
  styleUrls: ['./videos.component.css']
})
export class PlayVideoComponent implements OnInit {
  VideoID: any;
  videodata: playVideo;
  Embed_Code: any;
  loading = true;
  constructor(private sanitizer: DomSanitizer,
    private publicservice: PublicService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<PlayVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    var VideoID = this.data.VideoID;
    this.getVideoByID(VideoID);
  }
  getVideoByID(VideoID) {
    this.publicservice.getVideoByID(VideoID).subscribe(res => {
      console.log('VideoId in data', VideoID);
      if (res.Status) {
        this.videodata = res.Data.videoData;
        this.Embed_Code = this.videodata.Embed_Code;

        if (this.Embed_Code != null) {
          console.log('Embed_Code', this.videodata.Embed_Code);
          this.Embed_Code = this.sanitizer.bypassSecurityTrustResourceUrl(this.videodata.Embed_Code);
        }
        else {
          this.dialogRef.close();
          this.toastr.error('Video not available!!');
        }
        console.log('Embed_Code', this.Embed_Code);
      }
      this.loading = false;

    }, error => {
      this.toastr.error('Something went wrong!!');
      console.log('error', error);
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
