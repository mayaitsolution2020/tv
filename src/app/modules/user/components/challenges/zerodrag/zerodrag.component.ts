import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-zerodrag',
  templateUrl: './zerodrag.component.html',
  styleUrls: ['./zerodrag.component.css']
})
export class ZeroDragComponent implements OnInit {
  videoUrl: string;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openDialog(videoUrl): void {
    const dialogRef = this.dialog.open(ZeroDragVideoPopupComponent, {
      data: { videoUrl: videoUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-zerodrag-video',
  templateUrl: './videopopup.html',
  styleUrls: ['./zerodrag.component.css']
})
export class ZeroDragVideoPopupComponent implements OnInit {
  videoUrl: any;
  constructor(private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<ZeroDragVideoPopupComponent>,
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
  selector: 'app-zerodrag',
  templateUrl: './zerodragprint.html',
  styleUrls: ['./zerodrag.component.css']
})
export class ZeroDragPrintComponent implements OnInit {
  printPage() {
    window.print();
  }
  constructor() { }

  ngOnInit() {
  }

}
