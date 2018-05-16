import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
  usernameValid: boolean = null;

  constructor(private router: Router, private userService: UserService) { }

  submitLogin(username, password) {
    this.validateInput(username);
    if (this.usernameValid) {
      this.sendUserAuthRequest(username, password);
    } else {
      alert('Login Failed.');
    }
  }

  validateInput(username: string) {
    this.usernameValid = null;
    if (!username.includes(' ') && username !== '') {
      this.usernameValid = true;
    } else {
      this.usernameValid = false;
    }
  }

  sendUserAuthRequest(username: string, password: string) {
    let user = new User(username=username, password=password);
    console.log(user);
    this.userService.loginUser(user);
    this.router.navigate(['']);
  }
}
