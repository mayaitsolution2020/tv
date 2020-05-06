import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../../admin.service';
import { PinkAffiliate } from 'src/app/modules/admin/model/pinkaffiliates';
import { ToastrService } from 'ngx-toastr';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pinkaffiliatelist',
  templateUrl: './pinkaffiliatelist.component.html',
  styleUrls: ['./pinkaffiliatelist.component.css']
})
export class PinkaffiliateListComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Image', 'PublishedDate', 'SortOrder', 'action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  baseUrl: string;
  dataSource;
  pinkAfflicateList: PinkAffiliate[];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllPinkAfflicate();
  }


  getAllPinkAfflicate() {
    this.adminService.getAllPinkAfflicate().subscribe(res => {
      if (res.Status) {
        this.pinkAfflicateList = res.Data;

        this.dataSource = new MatTableDataSource(this.pinkAfflicateList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    }, error => {
      console.log('error', error);
    })
  }
  deletePinkAfflicate(id) {

    this.adminService.deletePinkAfflicateInfo(id).subscribe(res => {
      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllPinkAfflicate();
      }
      this.getAllPinkAfflicate();
    },
      error => { console.log(error) });
  }
}
