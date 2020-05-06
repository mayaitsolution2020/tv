import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../../admin.service';
import { ProductCat } from 'src/app/modules/admin/model/productcat';
import { ToastrService } from 'ngx-toastr';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-productcatlist',
  templateUrl: './productcatlist.component.html',
  styleUrls: ['./productcatlist.component.css']
})
export class ProductcatListComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'SortOrder', 'action',];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  baseUrl: string;
  dataSource;
  categoryList: ProductCat[];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private adminService: AdminService,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllProductCategories();
  }

  getAllProductCategories() {
    this.adminService.getAllProductCategories().subscribe(res => {
      if (res.Status) {

        this.categoryList = res.Data;
        this.dataSource = new MatTableDataSource(this.categoryList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    }, error => {
      console.log('error', error);
    })
  }
  deleteProductCat(id) {

    this.adminService.delete(id).subscribe(res => {
      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllProductCategories();
        // this.getAllProductCategory();
      }
      this.getAllProductCategories();
    },
      error => { console.log(error) });
  }




}
