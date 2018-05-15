import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})

export class RegisterComponent {
  usernameValid: boolean = null;
  emailValid: boolean = null;
  passwordFirstValid: boolean = null;
  passwordSecondValid: boolean = null;

  constructor(private userService: UserService) { }

  submitNewUser(username, email, passwordFirst, passwordSecond) {
    this.validateInput(username, email, passwordFirst, passwordSecond);
    if (this.usernameValid && this.emailValid && this.passwordFirstValid && this.passwordSecondValid) {
      this.createNewUser(username, email, passwordFirst);
    } else {
      alert('Registration Failed.');
    }
  }

  validateInput(username: string, email: string, passwordFirst: string, passwordSecond: string) {
    this.usernameValid = null;
    this.emailValid = null;
    this.passwordFirstValid = null;
    this.passwordSecondValid = null;
    if (!username.includes(' ') && username !== '') {
      this.usernameValid = true;
    } else {
      this.usernameValid = false;
    }

    if (!email.includes(' ') && email !== '') {
      this.emailValid = true;
    } else {
      this.emailValid = false;
    }

    if (!passwordFirst.includes(' ') && passwordFirst !== '') {
      this.passwordFirstValid = true;
    } else {
      this.passwordFirstValid = false;
    }

    if (passwordSecond === passwordFirst) {
      this.passwordSecondValid = true;
    } else {
      this.passwordSecondValid = false;
    }
  }

  createNewUser(username: string, email: string, password: string) {
    alert('Start Create New User. [CONNECT BACKEND]')
  }
}
