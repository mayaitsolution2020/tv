import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { ToastrService } from 'ngx-toastr';
import { Challenge } from 'src/app/modules/user/model/challenges';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  activeChallenges: Challenge[];
  deactiveChallenges: Challenge[];
  baseUrl: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userservice: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.getChallenges();
  }
  showMessage() {
    this.toastr.error('The selected challenge is not active');
  }
  getChallenges() {

    this.userservice.getChallenge().subscribe(res => {

      if (res.Status) {
        this.activeChallenges = res.Data.filter(x => x.IsActive == true);
        this.deactiveChallenges = res.Data.filter(x => x.IsActive == false);
        console.log('challenges', res.Data);
      }
      else {
        this.toastr.error('Something went wrong!!');
      }
    }, error => {
      this.toastr.error('Something went wrong!!');
      console.log('error', error);
    })
  }
}
