import { Component, OnInit, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from '../../account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private renderer: Renderer2,
    public router: Router,
    private accountservice: AccountService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    var data = this.registerForm.value;
    console.log("Data on Register", data);
    this.accountservice.registerUser(data).subscribe(res => {
      console.log("Data on Register", res);
      if (res.Status) {
        this.toastr.success('Registered successfully');
      }
    },
      err => {
        if (err.status == 404)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
          console.log(err);
      }
    );
  }

}
