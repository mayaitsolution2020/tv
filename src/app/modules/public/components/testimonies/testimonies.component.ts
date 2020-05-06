import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PublicService } from '../../public.service';
import { Testimonie } from 'src/app/modules/public/model/testimonie';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {
  baseUrl: any;
  testimonie: Testimonie[];
  ID: any;
  searchText: string = '';
  Image: any;
  page: number = 1;
  isLoading = false;
  constructor(
    private route: ActivatedRoute,
    private publicservice: PublicService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getTestimonies();
  }
  getTestimonies() {
    this.isLoading = true;
    this.publicservice.getAllTestimonies().subscribe(res => {

      if (res.Status) {
        this.testimonie = res.Data;
        console.log('testimonie', res.Data);
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
  testimonieSearch() {
    this.publicservice.getTestimonieData(this.searchText).subscribe(res => {
      console.log('Search Text', this.searchText);
      this.testimonie = res.Data.testimonieinfo;
      console.log('Search Result', this.testimonie);
    })
  }
}



@Component({
  selector: 'app-testimoniesdetail',
  templateUrl: './testimonies-detail.html',
  styleUrls: ['./testimonies.component.scss']
})

export class TestimoniesDetailComponent implements OnInit {
  baseUrl: any;
  testimonie: Testimonie;
  ID: any;
  Image: any;
  page: number = 1;

  constructor(
    private route: ActivatedRoute,
    private publicservice: PublicService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.route.params.subscribe((params: Params) => {
      this.ID = params.ID;
    });
    this.getTestimonieById(this.ID);
  }
  getTestimonieById(ID) {
    this.publicservice.getTestimonieById(ID).subscribe(res => {

      if (res.Status) {
        this.testimonie = res.Data.testimonieData;
        console.log('testimonie ID', res.Data.testimonieData);
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

