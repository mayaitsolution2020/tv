import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Meta } from '@angular/platform-browser';
import { Transformation } from '../../model/transformation';
import { PublicService } from '../../public.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  baseUrl: any;
  ID: any;
  transformation: Transformation;
  Image: any;
  imm: string;
  isLoading = false;
  constructor(
    private route: ActivatedRoute,
    private publicservice: PublicService,
    private toastr: ToastrService,

  ) {
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
    // this.imm = 'http://107.180.95.187:8084/assets/uploadedimages/Michelle-Whitehead1.jpg'
    this.baseUrl = environment.baseUrl;
    this.route.params.subscribe((params: Params) => {
      this.ID = params.ID;
    });
    this.getTransformationById(this.ID);
  }
  getTransformationById(ID) {
    //this._document.location.reload();
    this.publicservice.getTransformationById(ID).subscribe(res => {
      if (res.Status) {
        this.transformation = res.Data.transData;
        this.imm = 'https://travismartin.tv/' + this.transformation.Image;
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