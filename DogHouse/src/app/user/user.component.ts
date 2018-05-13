﻿import { Group } from './../models/group.model';
import { Role } from './../models/role.model';
import { OnInit, Component } from "@angular/core";
import { User } from '../models/user.model';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private users: Array<User> = [];
  private roles: Array<Role> = [];
  private groups: Array<Group> = [];
  private anyErrors:boolean = false;
  private finished:boolean = false;
  p: number = 1;
  loading: boolean;
  user = new User();
  user.userRoles=[];
  user.userGroups=[];
  constructor(private newService :CommonService,
              private myRoute: Router) {
  }

  onRoleChange(role, value){
    console.log(role +" - "+value);
    let index = this.user.userRoles.indexOf(role);
    if(value)
      this.user.userRoles.splice(1,0,role);
    else
      this.user.userRoles.splice(index,1);
  }

  onGroupChange(group,value){
    console.log(group +" - "+value);
    
    let index = this.user.userGroups.indexOf(group);
    if(value)
      this.user.userGroups.splice(1,0,group);
    else
      this.user.userGroups.splice(index,1);
      
  }

  onEditUser(userId){
    console.log(userId);
    this.newService.getUser(userId).subscribe(data =>  {
      console.log(data);
      this.user=data[0];
    });
  }

  onDeleteUser(userId){
    console.log(userId);
    this.newService.deleteUser(userId).subscribe(data =>  {
      alert(userId +" has been deleted.");
      this.ngOnInit();
    });
  }
  ngOnInit() {
    this.loading=true;
    this.newService.getUsers()
    .subscribe(data =>  {
     this.users=data;
      //console.log(JSON.stringify(data));
      this.loading=false;
    },
    error => this.anyErrors = true,
    () => this.finished = true)

    this.newService.getRoles()
    .subscribe(data =>  {
     
     this.roles=data;
      
    })

    this.newService.getGroups()
    .subscribe(data =>  {
    
     this.groups=data;
    })

  }

  register(user: User): void{
    
    console.log(user);

   
  }

}


