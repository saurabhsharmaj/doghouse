import { Group } from './../models/group.model';
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
  constructor(private newService :CommonService,
              private myRoute: Router) {
  }

  onRoleChange(roleCode, value){
    console.log(roleCode +" - "+value);
    let index = this.user.userRoles.indexOf(roleCode);
    if(value)
      this.user.userRoles.splice(1,0,roleCode);
    else
      this.user.userRoles.splice(index,1);
  }

  onGroupChange(groupCode,value){
    console.log(groupCode +" - "+value);
    
    let index = this.user.userGroups.indexOf(groupCode);
    if(value)
      this.user.userGroups.splice(1,0,groupCode);
    else
      this.user.userGroups.splice(index,1);
      
  }

  onEditUser(userId){
    console.log(userId);
  }
  ngOnInit() {
    this.user.userRoles=[];
    this.user.userGroups=[];
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


