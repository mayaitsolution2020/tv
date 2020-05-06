import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { environment } from 'src/environments/environment';
import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VideosData } from '../../model/videos';

@Component({
  selector: 'app-motivationmusiclist',
  templateUrl: './motivationmusiclist.component.html',
  styleUrls: ['./motivationmusiclist.component.css']
})
export class MotivationmusiclistComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Image', 'SortOrder', 'Action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource;
  musicList: VideosData[];
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
    this.getMotivationMusic();
  }

  getMotivationMusic() {
    this.adminService.getMotivationMusic().subscribe(res => {
      if (res.Status) {

        this.musicList = res.Data;
        this.dataSource = new MatTableDataSource(this.musicList);
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
        this.getMotivationMusic();

      }
      this.getMotivationMusic();
    },
      error => { console.log(error) });
  }




}

