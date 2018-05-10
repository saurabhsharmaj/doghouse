import { Injectable } from '@angular/core';
import {Http,HttpModule,Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }
  saveUser(user){
    return this.http.post('http://localhost:3000/users/', user)
            .map((response: Response) =>response.json())
  }
  
  login(user){
    return this.http.post('http://localhost:3000/login/',user)
            .map((response: Response) => response.json(),error => { console.error(error)})
  }

  getUsers(){
    return this.http.get('http://localhost:3000/users/')
            .map((response: Response) => response.json(),error => { console.error(error)})
  }  
 deleteUser(id){
    return this.http.post('http://localhost:8080/api/deleteUser/',{'id': id})
            .map((response: Response) =>response.json())
  }  
  

  getGroups(){
    return this.http.get('http://localhost:3000/groups/')
            .map((response: Response) => response.json(),error => { console.error(error)})
  }

  getRoles(){
    return this.http.get('http://localhost:3000/roles/')
            .map((response: Response) => response.json(),error => { console.error(error)})
  }
}