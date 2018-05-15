import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

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
    this.userService.loginUser(username, password);
    this.router.navigate(['']);
  }
}
