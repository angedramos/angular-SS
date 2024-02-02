import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {

  }
  @Input() User: User = { username: '', password: '' }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  login() {
    if (this.User.username === "angel123" && this.User.password === "123") {
      alert("Login Successfully");
      this.router.navigate(['home']);
    }
    else {
      alert('Username or Password is incorrect');
    }
  }

}

