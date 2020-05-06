import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../admin.service';
import { ToastrService } from 'ngx-toastr';
import { Quote } from '../../model/quotes';
import { environment } from 'src/environments/environment';
import { QuoteCategories } from '../../model/quotecategory';


@Component({
  selector: 'app-quotesadmin',
  templateUrl: './quotesadmin.component.html',
  styleUrls: ['./quotesadmin.component.css']
})
export class QuotesAdminComponent implements OnInit {
  [x: string]: any;
  selected: any[];
  fileToUpload: File = null;
  PostImagePath: any;
  quoteForm: FormGroup;
  quotes: Quote = new Quote();
  submitted = false;
  titleAlert: string = 'This field is required';
  QuoteCategoryId: any;
  categoryList: QuoteCategories = new QuoteCategories();
  date = new FormControl(new Date());
  constructor(public formBuilder: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (files != null && files.length > 0) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.ImagePath = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllQuotesCategory();
    this.route.params.subscribe((params: Params) => {
      this.ID = params.id;
      console.log('para', this.ID)
    });
    if (this.ID != null) {
      this.loadQuotes(this.ID);
    }
    this.quoteForm = this.formBuilder.group({
      Title: new FormControl('', Validators.required),
      Description: new FormControl(''),
      QuoteCategoryId: new FormControl(''),
      Slug: new FormControl(''),

      PublishedDate: new FormControl(''),
      SortOrder: new FormControl(''),
      Image: new FormControl(''),



    }, null);
    this.loadQuotes(this.ID);
  }
  get f() {
    return this.quoteForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.quoteForm.invalid) {
      return;
    }
    this.Image = this.quotes.Image;
    if (this.fileToUpload != null) {
      this.adminService.postImage(this.fileToUpload).subscribe(res => {
        if (res) {
          console.log('response', res)
          this.Image = res;
          this.updateData();
        }
      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      this.updateData();
    }
  }
  updateData() {
    var data = this.quotes;
    data["Image"] = this.Image;
    if (this.ID == null) {
      this.adminService.submitQuote(data).subscribe(res => {
        if (res.Status) {
          console.log('Data', data);
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/quoteslist']);
        }
        // this.quoteForm.reset();
      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      data["ID"] = this.ID;
      this.adminService.updateQuotes(data).subscribe(res => {
        if (res.Status) {
          console.log('this.response', data);
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/quoteslist']);
        }
        // this.quoteForm.reset();
      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }


  loadQuotes(id) {
    this.adminService.loadQuotes(id).subscribe(res => {
      console.log('ID', id);
      if (res.Status) {
        this.quotes = res.Data.quotedata;
      }
    }, error => {
      console.log('error', error);
    })
  }
  getAllQuotesCategory() {
    this.adminService.getAllQuotesCategory().subscribe(res => {
      if (res.Status) {
        this.categoryList = res.Data;
        console.log('this.categoryList', res.Data);
      }
    }, error => {
      console.log('error', error);
    })
  }



}

