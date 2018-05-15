import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Tool } from './models/tool.model';

@Injectable()
export class ToolService {

  constructor(private http: Http) { }

  getTools(){
    return this.http.get('https://tools-libarary.herokuapp.com/api/tools');
  }

}
