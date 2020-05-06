import { Component, OnInit, PipeTransform, Pipe } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PublicService } from '../../public.service';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit = 25, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }
}
@Component({
  selector: 'app-travisrecommend',
  templateUrl: './travisrecommend.component.html',
  styleUrls: ['./travisrecommend.component.scss']
})
export class TravisRecommendComponent implements OnInit {
  baseUrl: any;
  categoryId: any;
  p: number = 1;
  categories: any;
  products: any;
  view: any;
  searchText: string = '';
  productCategory: string;
  constructor(
    private route: ActivatedRoute,
    private publicservice: PublicService,
    private _router: Router,

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllProductCategory();
    this.getAllProduct();
  }
  getAllProductCategory() {
    this.publicservice.getAllProductCategory().subscribe(res => {

      if (res.Status) {
        this.categories = res.Data;
        console.log('All Categories', res.Data);
        // this.categoryId = res.Data[0].ID;
        // console.log('categoryId', this.categoryId);
        // this.getProductInfo(this.categoryId, this.categoryTitle);
      }
    }, error => {
      console.log('error', error);
    })
  }
  getProductInfo(categoryId, categoryTitle) {
    this.productCategory = categoryTitle;
    console.log('getProductInfo', categoryId);
    this.publicservice.getProductInfo(categoryId).subscribe(res => {
      if (res.Status) {
        this.products = res.Data.productInfo;
        console.log('Product By Category', this.products);
      }
    }, error => {
      console.log('error', error);
    })
  }
  getAllProduct() {
    this.productCategory = 'All Products';
    this.publicservice.getAllProducts().subscribe(res => {
      if (res.Status) {
        this.products = res.Data;
        console.log('All Products', this.products);
      }
    }, error => {
      console.log('error', error);
    })
  }
  productSearch() {
    this.publicservice.getProductData(this.searchText).subscribe(res => {
      console.log('Search Text', this.searchText);
      this.products = res.Data.productInfo;
    })
  }
}

@Component({
  selector: 'app-travisrecommend',
  templateUrl: './travisrecommend-detail.html',
  styleUrls: ['./travisrecommend.component.scss']
})
export class TravisRecommendDetailComponent implements OnInit {
  baseUrl: any;
  ID: any;
  product: object;
  AmazonLink: any;
  Image: any;
  Title: any;
  Description: any;

  constructor(
    // public dialogRef: MatDialogRef<TravisrecommendDetailComponent>,
    // public dialog: MatDialog,
    private route: ActivatedRoute,
    private publicservice: PublicService,
  ) { }
  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.route.params.subscribe((params: Params) => {
      this.ID = params.ID;
    });
    this.getProductById(this.ID);
  }

  getProductById(ID) {
    console.log('Id from Url', ID);
    this.publicservice.getProductById(ID).subscribe(res => {
      if (res.Status) {
        this.product = res.Data.productData;
        this.AmazonLink = res.Data.productData.AmazonLink;
        this.Image = res.Data.productData.Image;
        this.Title = res.Data.productData.Title;
        this.Description = res.Data.productData.Description;

        console.log('getProductById', res.Data);
      }
    }, error => {
      console.log('error', error);
    })
  }

}

