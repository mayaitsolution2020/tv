import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ViewClass } from '../../model/viewclass';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-viewclass',
  templateUrl: './viewclass.component.html',
  styleUrls: ['./viewclass.component.css']
})
export class ViewClassComponent implements OnInit {

  displayedColumns: string[] = ['Image', 'Title', 'PublishedDate', 'SortOrder', 'action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  baseUrl: string;
  dataSource;
  classList: ViewClass[];
  Date = new FormControl((new Date()).toISOString());
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllClass();
  }

  getAllClass() {
    this.adminService.getAllClass().subscribe(res => {
      if (res.Status) {

        this.classList = res.Data;
        this.dataSource = new MatTableDataSource(this.classList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    }, error => {
      console.log('error', error);
    })
  }

  deleteClass(id) {
    this.adminService.deleteClassInfo(id).subscribe(res => {
      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllClass();
      }
      this.getAllClass();
    },
      error => {
        console.log(error)
      });
  }
}

