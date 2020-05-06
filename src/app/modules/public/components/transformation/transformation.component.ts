import { Component, OnInit, OnChanges, OnDestroy, Inject } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PublicService } from '../../public.service';
import { Transformation } from 'src/app/modules/public/model/transformation';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {
  baseUrl: any;
  page: number = 1;
  transformation: Transformation[];
  searchText: string = '';
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private publicservice: PublicService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getTransformations();
  }

  getTransformations() {
    this.isLoading = true;
    this.publicservice.getAllTransformations().subscribe(res => {
      if (res.Status) {
        this.transformation = res.Data;
        console.log('transformation', res.Data);
      }
      else {
        this.toastr.error('Something went wrong!!');
      }
      this.isLoading = false;
    }, error => {
      this.toastr.error('Something went wrong!!');
      console.log('error', error);
    })
  }
  transformationSearch() {
    this.publicservice.getTransformationData(this.searchText).subscribe(res => {
      console.log('Search Text', this.searchText);
      this.transformation = res.Data.transInfo;
    })
  }
}

@Component({
  selector: 'app-transformationdetail',
  templateUrl: './transformation-detail.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationDetailComponent implements OnInit {
  baseUrl: any;
  ID: any;
  transformation: Transformation;
  Image: any;
  imm: string;
  isLoading = false;
  public href: string = "";
  constructor(
    private route: ActivatedRoute,
    private publicservice: PublicService,
    private toastr: ToastrService,
    private router: Router,
    @Inject(DOCUMENT) private _document: Document
  ) {
  }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    throw new Error("Method not implemented.");
  }

  ngOnInit() {
    this.href = this.router.url;
    console.log('Current URl', this.router.url);
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
        //   this.imm = 'https://angulartv.travismartin.tv/detail/' + this.ID;
        this.imm = 'https://travismartin.tv/detail/' + this.transformation.Image;
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

