import { Component, OnInit, Inject, Pipe } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safe'
})
@Component({
  selector: 'app-redemmed',
  templateUrl: './redemmed.component.html',
  styleUrls: ['./redemmed.component.css']
})
export class RedemmedComponent implements OnInit {
  videoUrl: string;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openDialog(videoUrl): void {
    const dialogRef = this.dialog.open(VideoPopupComponent, {
      data: { videoUrl: videoUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-redeeem-video',
  templateUrl: './videopopup.html',
  styleUrls: ['./redemmed.component.css']
})
export class VideoPopupComponent implements OnInit {
  videoUrl: any;
  constructor(private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<VideoPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    var videoUrl = this.data.videoUrl;
    this.loadVideo(videoUrl);
  }
  loadVideo(videoUrl) {
    console.log('Load Video', videoUrl);
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-redemmed',
  templateUrl: './redemmedprint.html',
  styleUrls: ['./redemmed.component.css']
})
export class RedemmedPrintComponent implements OnInit {

  printPage() {
    window.print();
  }
  constructor() { }

  ngOnInit() {
  }

}
