import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.component.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionComponent implements OnInit {
  videoUrl: string;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openDialog(videoUrl): void {
    const dialogRef = this.dialog.open(InterventionVideoComponent, {
      data: { videoUrl: videoUrl }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'app-intervention',
  templateUrl: './videopopup.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionVideoComponent implements OnInit {
  videoUrl: any;
  constructor(private sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<InterventionVideoComponent>,
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
  selector: 'app-intervention',
  templateUrl: './interventionprint.html',
  styleUrls: ['./intervention.component.css']
})
export class InterventionPrintComponent implements OnInit {
  printPage() {
    window.print();
  }
  constructor() { }

  ngOnInit() {
  }

}
