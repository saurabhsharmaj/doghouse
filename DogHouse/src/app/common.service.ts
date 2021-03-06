import { Injectable } from '@angular/core';
import {Http,HttpModule,Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CommonService {

  constructor(private http: Http) { }

  isEmailExist(user){
    return this.http.post('http://localhost:3000/users/email?emailId='+user.email, user)
            .map((response: Response) =>response.json())
  }
  searchUser(keyword){
    return this.http.post('http://localhost:3000/users/search?keyword='+keyword, keyword)
            .map((response: Response) =>response.json())
  }
  saveUser(user){
    return this.http.post('http://localhost:3000/users/', user)
            .map((response: Response) =>response.json())
  }

  updateUser(user){
    return this.http.put('http://localhost:3000/users/'+user._id+"?userId="+user._id, user)
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
  
  getUser(userId){
    return this.http.get('http://localhost:3000/users/'+userId+"?userId="+userId)
            .map((response: Response) => response.json(),error => { console.error(error)})
  }

 deleteUser(id){
    return this.http.delete('http://localhost:3000/users/'+id+"?userId="+id)
            .map((response: Response) =>response.json())
  }

  

  getGroups(){
    return this.http.get('http://localhost:3000/groups/')
            .map((response: Response) => response.json(),error => { console.error(error)})
  }

  getGroup(groupId){
    return this.http.get('http://localhost:3000/groups/'+groupId+"?groupId="+groupId)
            .map((response: Response) => response.json(),error => { console.error(error)})
  }

  saveGroup(group){
    return this.http.post('http://localhost:3000/groups/', group)
            .map((response: Response) =>response.json())
  }

  deleteGroup(id){
    return this.http.delete('http://localhost:3000/groups/'+id+"?groupId="+id)
            .map((response: Response) =>response.json())
  }

  updateGroup(group){
    return this.http.put('http://localhost:3000/groups/'+group._id+"?groupId="+group._id, group)
            .map((response: Response) =>response.json())
  }


  getRoles(){
    return this.http.get('http://localhost:3000/roles/')
            .map((response: Response) => response.json(),error => { console.error(error)})
  }

  getRole(roleId){
    return this.http.get('http://localhost:3000/roles/'+roleId+"?roleId="+roleId)
            .map((response: Response) => response.json(),error => { console.error(error)})
  }

  saveRole(role){
    return this.http.post('http://localhost:3000/roles/', role)
            .map((response: Response) =>response.json())
  }

  deleteRole(id){
    return this.http.delete('http://localhost:3000/roles/'+id+"?roleId="+id)
            .map((response: Response) =>response.json())
  }

  updateRole(role){
    return this.http.put('http://localhost:3000/roles/'+role._id+"?roleId="+role._id, role)
            .map((response: Response) =>response.json())
  }
}