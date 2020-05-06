import { Component, OnInit, Input, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-detox',
  templateUrl: './detox.component.html',
  styleUrls: ['./detox.component.css']
})
export class DetoxComponent implements OnInit {
  videoUrl: string;

  constructor(
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
  }
  openDialog(videoUrl): void {
    const dialogRef = this.dialog.open(DetoxVideoPopupComponent, {
      data: { videoUrl: videoUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
@Component({
  selector: 'app-detox-video',
  templateUrl: './videopopup.html',
  styleUrls: ['./detox.component.css']
})
export class DetoxVideoPopupComponent implements OnInit {
  videoUrl: any;
  constructor(private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<DetoxVideoPopupComponent>,
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
  selector: 'app-detox',
  templateUrl: './detoxprint.html',
  styleUrls: ['./detox.component.css']
})
export class DetoxPrintComponent implements OnInit {

  printPage() {
    window.print();
  }
  constructor() { }

  ngOnInit() {

  }

}
