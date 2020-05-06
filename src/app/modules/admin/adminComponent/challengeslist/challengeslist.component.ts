import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { AdminService } from '../../admin.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Challenges } from '../../model/challenges';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-challengeslist',
  templateUrl: './challengeslist.component.html',
  styleUrls: ['./challengeslist.component.css']
})
export class ChallengesListComponent implements OnInit {

  displayedColumns: string[] = ['ChallengeName', 'Image', 'Status', 'action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  baseUrl: string;
  dataSource;
  challengesList: Challenges[];
  checked = true;
  disabled = false;
  ngModelChecked: any;
  challenges: Challenges = new Challenges();
  challengesForm: FormGroup;
  ID: any;
  ChallengeName: any;
  ChallengeImage: any;


  constructor(private adminService: AdminService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.route.params.subscribe((params: Params) => {
      this.ID = params.id;

    })
    if (this.ID != null) {
      this.loadChallanges(this.ID);
    }
    this.getAllChallenges();
    this.loadChallanges(this.ID);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllChallenges() {
    this.adminService.getAllChallenges().subscribe(res => {
      if (res.Status) {

        this.challengesList = res.Data;

        this.dataSource = new MatTableDataSource(this.challengesList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    }, error => {
      console.log('error', error);
    })
  }
  deleteChallange(id) {
    console.log('this.deleteID', id)
    this.adminService.deleteChallenges(id).subscribe(res => {
      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllChallenges();

      }
      this.getAllChallenges();
    },
      error => { console.log(error) });
  }
  onNgModelChangeEvent(e, ChallengeName, ChallengeImage, ID) {

    this.ngModelChecked = e;
    this.ID = ID;
    this.ChallengeName = ChallengeName;
    this.ChallengeImage = ChallengeImage;


    this.loadChallanges(this.ID);
    if (this.ngModelChecked != null) {
      var data = this.challenges;
      data["ID"] = this.ID;
      data["IsActive"] = this.ngModelChecked;
      data["ChallengeImage"] = this.ChallengeImage;
      data["ChallengeName"] = this.ChallengeName;

      console.log('Final Data3', data);
      this.adminService.updateChallenges(data).subscribe(res => {
        if (res.Status) {

          console.log('this.response', data);
          this.toastr.warning('Update successfuly !!');
          // this.challengesForm.reset();
        }
        this.challengesForm.reset();
      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })

    }
    else {
      this.toastr.error('Something went wrong!!');

    }
  }
  loadChallanges(id) {
    this.adminService.loadChallanges(id).subscribe(res => {

      if (res.Status) {
        this.challenges = res.Data.challenges;
      }

    }, error => {

      console.log('error', error);
    })
  }




}