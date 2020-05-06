import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AdminService } from '../../admin.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PodcastsData } from '../../model/podcasts';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-podcastlist',
  templateUrl: './podcastlist.component.html',
  styleUrls: ['./podcastlist.component.css']
})
export class PodcastListComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Image', 'SortOrder', 'Action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  baseUrl: string;
  dataSource;
  podcastList: PodcastsData[];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllPodcast();
  }

  getAllPodcast() {
    this.adminService.getAllPodcast().subscribe(res => {
      if (res.Status) {

        this.podcastList = res.Data;
        this.dataSource = new MatTableDataSource(this.podcastList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    }, error => {
      console.log('error', error);
    })
  }
  deletePodcast(id) {
    console.log('this.deleteID', id)
    this.adminService.deletepodcastInfo(id).subscribe(res => {
      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllPodcast();
        // this.getAllProductCategory();
      }
      this.getAllPodcast();
    },
      error => { console.log(error) });
  }




}
