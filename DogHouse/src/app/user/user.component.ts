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
      this.user.userRoles = [];
      this.user.userGroups = [];
  }

  onRoleChange(role, value) {
    let index = this.user.userRoles.findIndex(uRole => uRole.roleCode === role.roleCode );
    if (value) {
      this.user.userRoles.splice(1, 0, role);
    } else {
      this.user.userRoles.splice(index, 1);
    }
  }

  onGroupChange(group, value) {
    let index = this.user.userGroups.findIndex(uGroup => uGroup.groupCode === group.groupCode );
    if (value) {
      this.user.userGroups.splice(1, 0, group);
    } else {
      this.user.userGroups.splice(index, 1);
    }
  }

  onEditUser(userId){
   
    this.newService.getUser(userId).subscribe(data =>  {
      
      this.user=data[0];
      this.groups.forEach(group => {
        let index = -1;
        this.user.userGroups.forEach(function(uGroup, i) {
              if (group.groupCode===uGroup.groupCode ) {
                index=i;
              }
            });
        group.checked = index != -1 ?true:false;
      });

      this.roles.forEach(role => {
        let index = -1;
        this.user.userRoles.forEach(function(uRole, i) {
              if (role.roleCode===uRole.roleCode ) {
                index=i;
              }
            });
        role.checked = index != -1 ? true:false;
      });
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
    this.user = new User();
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
    
    this.newService.updateUser(user)
    .subscribe(data =>  {
    this.ngOnInit();
    alert(user.userName +' updated sucessfully.');
    } );
  }

}


