import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Meals } from '../../model/meal';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-addmeal',
  templateUrl: './addmeal.component.html',
  styleUrls: ['./addmeal.component.css']
})
export class AddMealComponent implements OnInit {
  [x: string]: any;
  Title: any;
  fileToUpload: File = null;
  PostImagePath: any;
  mealForm: FormGroup;
  mealsModel: Meals = new Meals();
  submitted = false;
  titleAlert: string = 'This field is required';
  date = new FormControl(new Date());
  constructor(public formBuilder: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    if (files != null && files.length > 0) {
      var reader = new FileReader();
      reader.onload = (event: ProgressEvent) => {
        this.ImagePath = (<FileReader>event.target).result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }
  }

  ngOnInit() {

    this.baseUrl = environment.baseUrl;
    this.route.params.subscribe((params: Params) => {
      this.ID = params.id;
    });
    if (this.ID != null) {
      this.loadPost(this.ID);
    }
    this.mealForm = this.formBuilder.group({
      Title: new FormControl('', Validators.required),
      Embed_Code: new FormControl(''),
      PublishedDate: new FormControl(''),
      SortOrder: new FormControl(''),
      Description: new FormControl(''),
      UserID: new FormControl(''),
      Date: new FormControl(''),
      Week: new FormControl(''),
      Start_Weight: new FormControl(''),
      End_Weight: new FormControl(''),
      Note: new FormControl(''),
      Status: new FormControl(''),
      Breakfast1: new FormControl(''),
      Breakfast2: new FormControl(''),
      Breakfast3: new FormControl(''),
      Breakfast4: new FormControl(''),
      Breakfast5: new FormControl(''),
      Breakfast6: new FormControl(''),
      Breakfast7: new FormControl(''),
      Breakfast8: new FormControl(''),
      Breakfast9: new FormControl(''),
      Breakfast10: new FormControl(''),
      Breakfast11: new FormControl(''),
      Breakfast12: new FormControl(''),
      Breakfast13: new FormControl(''),
      Breakfast14: new FormControl(''),
      Breakfast15: new FormControl(''),
      Breakfast16: new FormControl(''),
      Breakfast17: new FormControl(''),
      Breakfast18: new FormControl(''),
      Breakfast19: new FormControl(''),
      Breakfast20: new FormControl(''),
      Breakfast21: new FormControl(''),
      Breakfast22: new FormControl(''),
      Breakfast23: new FormControl(''),
      Breakfast24: new FormControl(''),
      Breakfast25: new FormControl(''),
      Lunch1: new FormControl(''),
      Lunch2: new FormControl(''),
      Lunch3: new FormControl(''),
      Lunch4: new FormControl(''),
      Lunch5: new FormControl(''),
      Lunch6: new FormControl(''),
      Lunch7: new FormControl(''),
      Lunch8: new FormControl(''),
      Lunch9: new FormControl(''),
      Lunch10: new FormControl(''),
      Lunch11: new FormControl(''),
      Lunch12: new FormControl(''),
      Lunch13: new FormControl(''),
      Lunch14: new FormControl(''),
      Lunch15: new FormControl(''),
      Lunch16: new FormControl(''),
      Lunch17: new FormControl(''),
      Lunch18: new FormControl(''),
      Lunch19: new FormControl(''),
      Lunch20: new FormControl(''),
      Lunch21: new FormControl(''),
      Lunch22: new FormControl(''),
      Lunch23: new FormControl(''),
      Lunch24: new FormControl(''),
      Lunch25: new FormControl(''),
      Dinner1: new FormControl(''),
      Dinner2: new FormControl(''),
      Dinner3: new FormControl(''),
      Dinner4: new FormControl(''),
      Dinner5: new FormControl(''),
      Dinner6: new FormControl(''),
      Dinner7: new FormControl(''),
      Dinner8: new FormControl(''),
      Dinner9: new FormControl(''),
      Dinner10: new FormControl(''),
      Dinner11: new FormControl(''),
      Dinner12: new FormControl(''),
      Dinner13: new FormControl(''),
      Dinner14: new FormControl(''),
      Dinner15: new FormControl(''),
      Dinner16: new FormControl(''),
      Dinner17: new FormControl(''),
      Dinner18: new FormControl(''),
      Dinner19: new FormControl(''),
      Dinner20: new FormControl(''),
      Dinner21: new FormControl(''),
      Dinner22: new FormControl(''),
      Dinner23: new FormControl(''),
      Dinner24: new FormControl(''),
      Dinner25: new FormControl(''),

    }, null);
    this.loadPost(this.ID);
  }
  get f() {
    return this.mealForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.mealForm.invalid) {
      return;
    }
    if (this.fileToUpload != null) {
      this.baseUrl = environment.baseUrl;
      this.userService.postImage(this.fileToUpload).subscribe(res => {
        if (res) {
          this.Image = res;
          this.updateData();
        }
        else {
          this.toastr.error('Image not saved!!');
        }
      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      this.updateData();
    }
  }
  updateData() {
    var data = this.mealsModel;
    data["Image"] = this.Image;
    if (this.ID == null) {
      this.userService.submitMeals(data).subscribe(res => {
        if (res.Status) {
          this.toastr.success('Inserted successfuly !!');
          this.router.navigate(['/postlist']);
        }

      }
        , error => {
          this.toastr.error('Something went wrong!!');
          console.log('error', error);
        })
    }
    else {
      data["ID"] = this.ID;
      this.userService.updateUserMeal(data).subscribe(res => {
        if (res.Status) {
          this.toastr.success('Update successfuly !!');
          this.router.navigate(['/postlist']);
        }

      }, error => {
        this.toastr.error('Something went wrong!!');
        console.log('error', error);
      })
    }
  }



  loadMeals(id) {
    this.userService.loadMeals(id).subscribe(res => {
      if (res.Status) {
        this.mealsModel = res.Data.postData;

        this.mealForm.patchValue({
          Image: this.mealsModel['Image'],
        });
      }
    }, error => {
      console.log('error', error);
    })
  }


}
