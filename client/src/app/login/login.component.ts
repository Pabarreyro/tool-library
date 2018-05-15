import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})

export class LoginComponent {
  usernameValid: boolean = null;

  constructor(private userService: UserService) { }

  submitLogin(username, password) {
    this.validateInput(username);
    if (this.usernameValid) {
      this.authenticateLogin(username, password);
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

  authenticateLogin(username: string, password: string) {
    alert('Login Auth Sent. [CONNECT BACKEND]')
  }
}
