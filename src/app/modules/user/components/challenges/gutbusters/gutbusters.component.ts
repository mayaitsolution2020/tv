import { Component, OnInit, Inject, Pipe } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
@Pipe({
  name: 'safe'
})
@Component({
  selector: 'app-gutbusters',
  templateUrl: './gutbusters.component.html',
  styleUrls: ['./gutbusters.component.css']
})
export class GutBustersComponent implements OnInit {
  videoUrl: string;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {

  }
  openDialog(videoUrl): void {
    const dialogRef = this.dialog.open(GutBustersVideoComponent, {
      data: { videoUrl: videoUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
@Component({
  selector: 'app-gutbusters-video',
  templateUrl: './videopopup.html',
  styleUrls: ['./gutbusters.component.css']
})
export class GutBustersVideoComponent implements OnInit {
  videoUrl: any;
  constructor(private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<GutBustersVideoComponent>,
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
  selector: 'app-gutbusters',
  templateUrl: './gutbusterprint.html',
  styleUrls: ['./gutbusters.component.css']
})
export class GutBustersPrintComponent implements OnInit {

  printPage() {
    window.print();
  }
  constructor(

  ) { }

  ngOnInit() {

  }


}
