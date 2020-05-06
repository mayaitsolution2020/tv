import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PublicService } from '../../public.service';
import { Quote } from '../../model/quote';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  baseUrl: any;
  categories: any[];
  allquotes: Quote[];
  ID: any;
  page: number = 1;
  searchText: string = '';
  categoryName: string;
  isLoading = false;
  constructor(
    private route: ActivatedRoute,
    private publicservice: PublicService,
    public router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getQuotesCategories();
    this.getAllQuotes();
  }
  getQuotesCategories() {
    this.isLoading = true;
    this.publicservice.getAllQuotesCategory().subscribe(res => {
      if (res.Status) {
        this.categories = res.Data;
        console.log('All quote categories', this.categories);

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

  getAllQuotes() {
    this.isLoading = true;
    this.categoryName = 'All Quotes';
    this.publicservice.getAllQuotes().subscribe(res => {
      if (res.Status) {
        this.allquotes = res.Data;
        console.log('All quotes', res.Data);

      }
      else {
        this.toastr.error('Something went wrong!!');
      }
      this.isLoading = false;
    }, error => {
      console.log('error', error);
      this.toastr.error('Something went wrong!!');
    })
  }

  getQuoteByCategory(categoryID, categoryName) {
    this.isLoading = true;
    this.categoryName = categoryName;
    this.publicservice.getQuotes(categoryID).subscribe(res => {
      if (res.Status) {
        this.allquotes = res.Data.quotesbycategory;
        console.log('All quotes', this.allquotes);

      }
      this.isLoading = false;
    }, error => {
      console.log('error', error);
    })
  }

  openDetail(ID) {
    console.log('ID from quote', ID);
    this.router.navigate(['/register', ID]);
  }

}

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quote-detail.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteDetailComponent implements OnInit {
  baseUrl: any;
  ID: any;
  quotedetail: Quote;

  constructor(
    private route: ActivatedRoute,
    private publicservice: PublicService,
    public router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.route.params.subscribe((params: Params) => {
      this.ID = params.ID;
    });
    this.getQuoteById(this.ID);
  }
  getQuoteById(ID) {
    console.log('Id from Url', ID);
    this.publicservice.getQuoteDetailByID(ID).subscribe(res => {
      if (res.Status) {
        this.quotedetail = res.Data.quotedata;
        console.log('quotedetail', res.Data);
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
