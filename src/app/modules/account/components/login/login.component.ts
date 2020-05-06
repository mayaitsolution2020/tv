import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../../account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  username: any;
  password: any;
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    public router: Router,
    private accountservice: AccountService,
    private toastr: ToastrService
  ) {

    this.loginForm = this.formBuilder.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required],

    });

  }
  get f() {
    return this.loginForm.controls;
  }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }, null);
  }
  onSubmit() {

    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    var data = this.loginForm.value;
    console.log('Data on login', data);
    this.accountservice.userAuthentication(data).subscribe(res => {
      console.log("Response from login", res);
      if (res.success) {

        localStorage.setItem('userToken', res.token);
        localStorage.setItem('userRoles', res.role);
        if (res.role === '1') {
          this.router.navigate(['/addclass']);
          this.toastr.success('Login successfully !!');
        }
        else {

          this.router.navigate(['/challenge']);
          this.toastr.success('Login successfully !!');
        }
        this.isLoading = false;
      }
      else {
        this.toastr.error(res.message);
      }

    }

    );
  }
}