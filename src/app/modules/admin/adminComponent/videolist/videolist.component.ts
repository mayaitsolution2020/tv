import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideosData } from '../../model/videos';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css']
})
export class VideoListComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Image', 'SortOrder', 'Action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  videoList: VideosData[];
  baseUrl: String;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) { }

  ngOnInit() {

    this.baseUrl = environment.baseUrl;
    this.getAllVideo();
  }

  getAllVideo() {
    this.adminService.getAllVideo().subscribe(res => {
      if (res.Status) {

        this.videoList = res.Data;
        this.dataSource = new MatTableDataSource(this.videoList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    }, error => {
      console.log('error', error);
    })
  }
  deletevideo(id) {
    this.adminService.deletevideoInfo(id).subscribe(res => {
      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllVideo();
        // this.getAllProductCategory();
      }
      this.getAllVideo();
    },
      error => { console.log(error) });
  }




}
