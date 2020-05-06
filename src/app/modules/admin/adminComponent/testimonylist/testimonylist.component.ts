import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Testimony } from 'src/app/modules/admin/model/testimony';
import { ToastrService } from 'ngx-toastr';

import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-testimonylist',
  templateUrl: './testimonylist.component.html',
  styleUrls: ['./testimonylist.component.css']
})
export class TestimonyListComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Image','PublishedDate', 'SortOrder', 'action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  baseUrl: string;
  dataSource;
  testimonieList: Testimony[];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllTestimonie();
  }

  getAllTestimonie() {
    this.adminService.getAllTestimonie().subscribe(res => {
      if (res.Status) {

        this.testimonieList = res.Data;
        this.dataSource = new MatTableDataSource(this.testimonieList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    }, error => {
      console.log('error', error);
    })
  }
  deleteTestimonie(id) {
    this.adminService.deleteTestimonieInfo(id).subscribe(res => {
      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllTestimonie();
        // this.getAllProductCategory();
      }
      this.getAllTestimonie();
    },
      error => { console.log(error) });
  }
}
