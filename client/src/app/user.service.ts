import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Http } from '@angular/http';
import { User } from './models/user.model';
import { USER } from './test-data';


const httpOptions = {
  headers: new HttpHeaders({"Content-Type": 'application/json' })

}

@Injectable()
export class UserService {
  private endpoint = 'api/auth/';

  constructor(private http: HttpClient) { }

  getUser() {
    return USER;
  }

  // loginUser(username: string, password: string) {

  //   alert('Start Login Auth. [CONNECT SERVICE TO BACKEND]')
  // }

  loginUser(data:User): Observable<any>{
    let apiLoginEndpoint = `${this.endpoint}login/`
    return this.http.post(apiLoginEndpoint, data, httpOptions)
}

  // createNewUser(username: string, email: string, password: string) {
  //   alert('Start Create New User. [CONNECT SERVICE TO BACKEND]')
  // }

  createNewUser(data:any): Observable<any>{
    let apiRegisterEndpoint = `${this.endpoint}register/`
    return this.http.post(apiRegisterEndpoint, data, httpOptions)
}
}




