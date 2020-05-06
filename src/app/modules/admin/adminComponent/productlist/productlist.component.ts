import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Productinfo } from 'src/app/modules/admin/model/productinfo';
import { ToastrService } from 'ngx-toastr';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductListComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Image', 'SortOrder', 'action',];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  baseUrl: string;
  dataSource;
  productList: Productinfo[];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private adminService: AdminService,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllProduct();
  }

  getAllProduct() {
    this.adminService.getAllProduct().subscribe(res => {
      if (res.Status) {

        this.productList = res.Data;
        this.dataSource = new MatTableDataSource(this.productList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    }, error => {
      console.log('error', error);
    })
  }
  deleteProduct(id) {

    this.adminService.deleteProductInfo(id).subscribe(res => {
      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllProduct();
        // this.getAllProductCategory();
      }
      this.getAllProduct();
    },
      error => { console.log(error) });
  }
}
