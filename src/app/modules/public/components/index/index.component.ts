import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../../public.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { Meetings } from 'src/app/modules/public/model/index';
import { environment } from 'src/environments/environment';
export interface DialogData {
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  baseUrl: string;
  meeting: object;
  meetingId: any;
  othermeeting: Meetings[];
  WebinarLink: any;
  Image: any;

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private publicservice: PublicService,
    public dialog: MatDialog

  ) {

  }
  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getClassesMeetings();


  }
  openDialog(): void {
    const dialogRef = this.dialog.open(IndexVideoComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getClassesMeetings() {
    this.publicservice.getClassesMeetings().subscribe(res => {

      if (res.Status) {
        this.meeting = res.Data;
        this.WebinarLink = res.Data.WebinarLink;
        this.Image = res.Data.Image;

        console.log('First Meeting', res.Data);
        this.meetingId = res.Data.ID;
        console.log('meetingId', this.meetingId);
        this.getOtherClasses(this.meetingId);
      }
      else {
        this.toastr.error('Something went wrong!!');
      }
    }, error => {
      this.toastr.error('Something went wrong!!');
      console.log('error', error);
    })
  }
  getOtherClasses(meetingId) {
    console.log('getOtherClasses', meetingId);
    this.publicservice.getOtherClasses(meetingId).subscribe(res => {
      if (res.Status) {

        this.othermeeting = res.Data;
        console.log('Other classes', res.Data);
      }
      else {
        this.toastr.error('Something went wrong!!');
      }
    }, error => {
      this.toastr.error('Something went wrong!!');
      console.log('error', error);
    })
  }


}


@Component({
  selector: 'app-index-video',
  templateUrl: './indexvideo.html',
  styleUrls: ['./index.component.scss']
})
export class IndexVideoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<IndexVideoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'app-textsignup',
  templateUrl: './textsignup.html',
  styleUrls: ['./index.component.scss']
})
export class TextSignupComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {

  }

}
