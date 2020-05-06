import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { Params, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { Meals } from '../../model/meal';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Description', 'Image', 'action'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  baseUrl: string;
  dataSource;
  mealsList: Meals[];
  checked = true;
  disabled = false;
  ngModelChecked: any;
  meals: Meals = new Meals();
  mealsForm: FormGroup;
  ID: any;
  ChallengeName: any;
  ChallengeImage: any;


  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private toastr: ToastrService

  ) { }

  ngOnInit() {
    this.baseUrl = environment.baseUrl;
    this.route.params.subscribe((params: Params) => {
      this.ID = params.id;

    })
    if (this.ID != null) {
      this.loadMeals(this.ID);
    }
    this.getAllMeals();
    this.loadMeals(this.ID);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getAllMeals() {
    this.userService.getAllMeals().subscribe(res => {
      if (res.Status) {

        this.mealsList = res.Data;

        this.dataSource = new MatTableDataSource(this.mealsList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      }
    }, error => {
      console.log('error', error);
    })
  }
  deleteMeals(id) {
    console.log('this.deleteID', id)
    this.userService.deleteMeals(id).subscribe(res => {
      if (res.Data) {
        this.toastr.error('Deleted successfully !!');
        this.getAllMeals();

      }
      this.getAllMeals();
    },
      error => { console.log(error) });
  }

  loadMeals(id) {
    this.userService.loadMeals(id).subscribe(res => {

      if (res.Status) {
        this.meals = res.Data.meals;
      }

    }, error => {

      console.log('error', error);
    })
  }




}