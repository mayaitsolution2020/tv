import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { VideosData } from '../../model/videos';
import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videomotivationlist',
  templateUrl: './videomotivationlist.component.html',
  styleUrls: ['./videomotivationlist.component.css']
})
export class VideoMotivationListComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Image', 'SortOrder', 'Action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  videoList: VideosData[];
  baseUrl: string;

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getMotivationVideo();
  }

  getMotivationVideo() {
    this.adminService.getMotivationVideo().subscribe(res => {
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
        this.getMotivationVideo();

      }
      this.getMotivationVideo();
    },
      error => { console.log(error) });
  }




}

