import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-shibboleth3day',
  templateUrl: './shibboleth3day.component.html',
  styleUrls: ['./shibboleth3day.component.css']
})
export class Shibboleth3dayComponent implements OnInit {
  videoUrl: string;

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openDialog(videoUrl): void {
    const dialogRef = this.dialog.open(shibbolethVideoPopupComponent, {
      data: { videoUrl: videoUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
@Component({
  selector: 'app-shibboleth3day-video',
  templateUrl: './videopopup.html',
  styleUrls: ['./shibboleth3day.component.css']
})
export class shibbolethVideoPopupComponent implements OnInit {
  videoUrl: any;
  constructor(private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<shibbolethVideoPopupComponent>,
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
  selector: 'app-shibboleth3day',
  templateUrl: './shibboleth3dayprint.html',
  styleUrls: ['./shibboleth3day.component.css']
})
export class Shibboleth3dayPrintComponent implements OnInit {
  printPage() {
    window.print();
  }
  constructor() { }

  ngOnInit() {
  }

}
