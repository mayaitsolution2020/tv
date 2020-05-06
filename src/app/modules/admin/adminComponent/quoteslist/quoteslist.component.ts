import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminService } from '../../admin.service';
import { Quote } from 'src/app/modules/admin/model/quotes';
import { ToastrService } from 'ngx-toastr';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-quoteslist',
  templateUrl: './quoteslist.component.html',
  styleUrls: ['./quoteslist.component.css']
})
export class QuoteslistComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Image', 'PublishedDate', 'SortOrder', 'action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  baseUrl: string;
  dataSource;
  QuotesList: Quote[];

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getAllQuotes();
  }

  getAllQuotes() {
    this.adminService.getAllQuotes().subscribe(res => {
      if (res.Status) {

        this.QuotesList = res.Data;
        this.dataSource = new MatTableDataSource(this.QuotesList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    }, error => {
      console.log('error', error);
    })
  }
  deleteQuotes(id) {
    this.adminService.deleteQuotesInfo(id).subscribe(res => {
      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllQuotes();
        // this.getAllProductCategory();
      }
      this.getAllQuotes();
    },
      error => { console.log(error) });
  }



}
