import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductCat } from '../../model/productcat';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.css']
})
export class ProductCategoryComponent implements OnInit {
  [x: string]: any;
  selected: any[];
  fileToUpload: File = null;
  ImagePath: any;
  PostImagePath: any;
  productcatForm: FormGroup;
  category: ProductCat = new ProductCat();
  submitted = false;
  titleAlert: string = 'This field is required';
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
    this.route.params.subscribe((params: Params) => {
      this.ID = params.id;
      console.log('para', this.ID)
    });
    if (this.ID != null) {
      this.loadProductInfo(this.ID);
    }
    this.productcatForm = this.formBuilder.group({
      Title: new FormControl('', Validators.required),
      Image: new FormControl(''),
      SortOrder: new FormControl(''),
    }, null);
    this.loadProductInfo(this.ID);
  }
  get f() {
    return this.productcatForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.productcatForm.invalid) {
      return;
    }
    this.Image = this.category.Image;
    if (this.fileToUpload != null) {
      console.log('Image from api', this.fileToUpload);
      this.adminService.postImage(this.fileToUpload).subscribe(res => {
        if (res) {
          console.log('response', res)
          this.Image = res;
          this.updatedata();
        }
      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      this.updatedata();
    }
  }

  updatedata() {
    var data = this.category;
    data["Image"] = this.Image;
    console.log('Image on update data', this.Image);
    console.log('Data', data);
    if (this.ID == null) {
      this.adminService.submitProductCat(data).subscribe(res => {
        if (res.Status) {
          console.log('data', data);
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/productcatlist']);
        }

      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
    else {
      data["ID"] = this.ID;
      console.log('Final Data3', data);
      this.adminService.updateProductCat(data).subscribe(res => {
        if (res.Status) {
          console.log('this.response', data);
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/productcatlist']);
          // this.productcatForm.reset();
        }
        this.productcatForm.reset();
      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }





  loadProductInfo(id) {
    this.adminService.loadProductInfo(id).subscribe(res => {
      console.log('ID', id);
      if (res.Status) {
        this.category = res.Data.productCategory;



      }
    }, error => {
      console.log('error', error);
    })
  }
}