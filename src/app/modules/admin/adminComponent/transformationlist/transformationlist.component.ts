import { Component, ViewChild, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../../admin.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { TransformationAdmin } from 'src/app/modules/admin/model/transformationadmin';
import { ToastrService } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-transformationlist',
  templateUrl: './transformationlist.component.html',
  styleUrls: ['./transformationlist.component.css']
})
export class TransformationListComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Image', 'PublishedDate', 'SortOrder', 'Action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  baseUrl: String;
  dataSource;
  transformationList: TransformationAdmin[];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private AdminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService


  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllTransformation();
  }

  getAllTransformation() {
    this.AdminService.getAllTransformation().subscribe(res => {
      if (res.Status) {

        this.transformationList = res.Data;

        this.dataSource = new MatTableDataSource(this.transformationList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;


      }
    }, error => {
      console.log('error', error);
    })
  }
  deleteTransformation(id) {

    this.AdminService.deleteTransformationInfo(id).subscribe(res => {

      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllTransformation();
        // this.getAllProductCategory();
      }
      this.getAllTransformation();
    },
      error => { console.log(error) });
  }




}

