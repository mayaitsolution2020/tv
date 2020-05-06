import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  submitted = false;
  email: any;
  forgotForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute, // remove this
    private renderer: Renderer2, // remove this
    public router: Router,
    private accountservice: AccountService,
    private toastr: ToastrService
  ) {

    this.forgotForm = this.formBuilder.group({
      'email': [null, Validators.required],
    });

  }
  get f() { // give it apropriate name
    return this.forgotForm.controls;
  }
  ngOnInit() {
    this.forgotForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
    }, null);
  }
  onSubmit() {
    this.submitted = true;
    if (this.forgotForm.invalid) {
      return;
    }
    var data = this.forgotForm.value;
    this.accountservice.forgotPassword(data).subscribe(res => {
      console.log("forgotPassword", data);
      console.log("Response forgotPassword", res);
      if (res.success) {
        this.toastr.error('Plese check you email to reset password');
      }
      else {
        // this.toastr.error(res.Message);
      }
    }
    );
  }
}