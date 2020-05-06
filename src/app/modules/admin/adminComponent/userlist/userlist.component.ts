import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { AdminService } from '../../admin.service';
import { Users } from '../../model/user';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserListComponent implements OnInit {

  displayedColumns: string[] = ['Username', 'Image', 'Email', 'Status', 'Action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  baseUrl: String;
  dataSource;
  userList: Users[];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private AdminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService


  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllUser();
  }

  getAllUser() {
    this.AdminService.getAllUser().subscribe(res => {
      if (res.Status) {

        this.userList = res.Data;

        this.dataSource = new MatTableDataSource(this.userList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;


      }
    }, error => {
      console.log('error', error);
    })
  }
  deleteUser(id) {


    this.AdminService.deleteUser(id).subscribe(res => {

      if (res.Data) {
        this.toastr.success('Status Updated Succesfully !!');
        this.getAllUser();
        // this.getAllProductCategory();
      }
      this.getAllUser();
    },
      error => { console.log(error) });
  }




}


