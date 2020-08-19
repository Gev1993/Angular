import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerLogin: FormGroup;
  nameLogin: FormControl;
  passwordLogin: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.loginControl();
    this.loginCreate();
  }

  // tslint:disable-next-line:typedef
  loginControl() {
    this.nameLogin = new FormControl('', [
      Validators.required, Validators.minLength(3), Validators.maxLength(15)
    ]);
    this.passwordLogin = new FormControl('', [
      Validators.required, Validators.minLength(6), Validators.maxLength(18)
    ]);
  }

  // tslint:disable-next-line:typedef
  loginCreate() {
    this.registerLogin = new FormGroup({
      nameLogin: this.nameLogin,
      passwordLogin: this.passwordLogin
    });
  }

  // tslint:disable-next-line:typedef
  loginSubmit() {
    if (this.registerLogin.valid) {
      console.log('submit');
      console.log(this.registerLogin.value);
    }
  }

}
