import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { USER } from './test-data';

@Injectable()
export class UserService {

  constructor() { }

  getUser() {
    return USER;
  }
}
