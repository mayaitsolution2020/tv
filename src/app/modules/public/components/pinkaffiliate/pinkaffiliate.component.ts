import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PublicService } from '../../public.service';
import { PinkAffiliate } from 'src/app/modules/public/model/pinkaffiliate';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pinkaffiliate',
  templateUrl: './pinkaffiliate.component.html',
  styleUrls: ['./pinkaffiliate.component.scss']
})
export class PinkaffiliateComponent implements OnInit {
  baseUrl: any;
  affiliate: PinkAffiliate[];
  searchText: string = '';
  page: number = 1;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private publicservice: PublicService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getPinkAffliate();
  }
  getPinkAffliate() {
    this.isLoading = true;
    this.publicservice.getAllPinkAffiliates().subscribe(res => {

      if (res.Status) {
        this.affiliate = res.Data;
        console.log('affiliate', res.Data);
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
  affiliateSearch() {
    this.publicservice.getAffiliateData(this.searchText).subscribe(res => {
      console.log('Search Text', this.searchText);
      this.affiliate = res.Data.affiliateInfo;
    })
  }
}

@Component({
  selector: 'app-pinkaffiliatedetail',
  templateUrl: './pinkaffiliate-detail.html',
  styleUrls: ['./pinkaffiliate.component.scss']
})
export class PinkaffiliateDetailComponent implements OnInit {
  baseUrl: any;
  affiliate: PinkAffiliate;
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
    this.getPinkAffiliateById(this.ID);
  }
  getPinkAffiliateById(ID) {
    this.publicservice.getPinkAffiliateById(ID).subscribe(res => {

      if (res.Status) {
        this.affiliate = res.Data.affiliateData;
        console.log('getPinkAffiliateById', res.Data.affiliateData);
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
