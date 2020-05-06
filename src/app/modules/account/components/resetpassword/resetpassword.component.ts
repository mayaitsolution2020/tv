import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Params, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../account.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  ID: number;
  submitted = false;
  userPasswordForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private accountservice: AccountService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.ID = params.id;
      console.log('para', this.ID)
    });


    this.userPasswordForm = this.formBuilder.group({
      Password: new FormControl('', Validators.required),
      ConfirmPassword: new FormControl('', Validators.required),

    }, {
      validator: MustMatch('NewPassword', 'ConfirmPassword')
    });
  }

  get forPass() {
    return this.userPasswordForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.userPasswordForm.invalid) {
      return;
    }
    var data = this.userPasswordForm.value;
    data["ID"] = this.ID;
    this.accountservice.resetPassword(data).subscribe(res => {
      console.log('userPasswordForm data', data);
      console.log("Response from userPasswordForm", res);
      if (res.success) {
        this.toastr.success('Password reset successfully');
      }
      else {
        this.toastr.error(res.Message);
      }
    }
    );
  }

}
export function MustMatch(controlName: string, matchingControlName: string) {
  return (userPasswordForm: FormGroup) => {
    const control = userPasswordForm.controls[controlName];
    const matchingControl = userPasswordForm.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }
    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
