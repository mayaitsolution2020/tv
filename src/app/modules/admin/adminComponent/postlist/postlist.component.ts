import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Post } from '../../model/Post';
import { AdminService } from '../../admin.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostListComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Image', 'PublishedDate', 'SortOrder', 'Action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  baseUrl: String;
  dataSource;
  postList: Post[];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService


  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllPost();
  }

  getAllPost() {
    this.adminService.getAllPost().subscribe(res => {
      if (res.Status) {

        this.postList = res.Data;

        this.dataSource = new MatTableDataSource(this.postList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;


      }
    }, error => {
      console.log('error', error);
    })
  }
  deletePost(id) {

    this.adminService.deletePost(id).subscribe(res => {

      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllPost();
        // this.getAllProductCategory();
      }
      this.getAllPost();
    },
      error => { console.log(error) });
  }




}

