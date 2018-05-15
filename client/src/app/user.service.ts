import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { USER } from './test-data';

@Injectable()
export class UserService {

  constructor() { }

  getUser() {
    return USER;
  }

  loginUser(username: string, password: string) {
    alert('Start Login Auth. [CONNECT SERVICE TO BACKEND]')
  }

  createNewUser(username: string, email: string, password: string) {
    alert('Start Create New User. [CONNECT SERVICE TO BACKEND]')
  }
}
