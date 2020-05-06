import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-shibbolethville',
  templateUrl: './shibbolethville.component.html',
  styleUrls: ['./shibbolethville.component.css']
})
export class ShibbolethVilleComponent implements OnInit {
  videoUrl: string;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openDialog(videoUrl): void {
    const dialogRef = this.dialog.open(ShibbolethVilleVideoPopupComponent, {
      data: { videoUrl: videoUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
@Component({
  selector: 'app-shibbolethville',
  templateUrl: './shibbolethvilleprint.html',
  styleUrls: ['./shibbolethville.component.css']
})
export class ShibbolethVillePrintComponent implements OnInit {
  printPage() {
    window.print();
  }
  constructor() { }

  ngOnInit() {
  }

}
@Component({
  selector: 'app-shibbolethville-video',
  templateUrl: './videopopup.html',
  styleUrls: ['./shibbolethville.component.css']
})
export class ShibbolethVilleVideoPopupComponent implements OnInit {
  videoUrl: any;
  constructor(private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<ShibbolethVilleVideoPopupComponent>,
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
  selector: 'app-shibbolethville',
  templateUrl: './shibbolethlandloverprint.html',
  styleUrls: ['./shibbolethville.component.css']
})
export class ShibbolethLanLoverPrintComponent implements OnInit {
  printPage() {
    window.print();
  }
  constructor() { }

  ngOnInit() {
  }

}
