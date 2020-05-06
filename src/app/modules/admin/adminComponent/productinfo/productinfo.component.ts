import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Productinfo } from '../../model/productinfo';
import { ProductCat } from '../../model/productcat';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductInfoComponent implements OnInit {
  selected: any[];
  [x: string]: any;
  fileToUpload: File = null;
  ImagePath: any;
  CategoryName: any;
  PostImagePath: any;
  ProductCategory: any;
  productInfoForm: FormGroup;
  product: Productinfo = new Productinfo();
  submitted = false;
  categoryList: ProductCat = new ProductCat();
  date = new FormControl(new Date());
  // category: ProductCat = new ProductCat();
  Title: any;
  titleAlert: string = 'This field is required';

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
    this.getAllProductCat();
    this.route.params.subscribe((params: Params) => {
      this.ID = params.id;

    });
    if (this.ID != null) {
      this.loadProduct(this.ID);
    }
    this.productInfoForm = this.formBuilder.group({
      ProductCategory: new FormControl(''),
      Title: new FormControl('', Validators.required),
      Description: new FormControl(''),
      Image: new FormControl(''),
      AmazonLink: new FormControl(''),
      SortOrder: new FormControl(''),
    }, null);
    this.loadProduct(this.ID);
  }
  get f() {
    return this.productInfoForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.productInfoForm.invalid) {
      return;
    }
    this.Image = this.product.Image;
    this.Title = this.categoryList.Title;
    if (this.fileToUpload != null) {

      this.adminService.postImage(this.fileToUpload).subscribe(res => {
        if (res) {

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
    var data = this.product;
    data["Image"] = this.Image;


    if (this.ID == null) {
      this.adminService.submitProductInfo(data).subscribe(res => {
        if (res.Status) {
          console.log('Data', data);
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/productlist']);
        }

      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      data["ID"] = this.ID;

      this.adminService.updateProductInfo(data).subscribe(res => {
        if (res.Status) {
          console.log('this.response', data);
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/productlist']);
        }
        // this.productInfoForm.reset();
      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }


  loadProduct(id) {
    this.adminService.loadProduct(id).subscribe(res => {
      console.log('ID', id);
      if (res.Status) {
        this.product = res.Data.productData;
      }
    }, error => {
      console.log('error', error);
    })
  }

  getAllProductCat() {
    this.adminService.getAllProductCategory().subscribe(res => {
      if (res.Status) {
        this.categoryList = res.Data;

      }
    }, error => {
      console.log('error', error);
    })
  }


}


