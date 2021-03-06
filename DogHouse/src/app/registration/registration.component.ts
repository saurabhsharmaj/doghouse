﻿import { OnInit, Component } from "@angular/core";
import { User } from '../models/user.model';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';
import { Role } from "../models/role.model";
import { Group } from "../models/group.model";
import { getMatScrollStrategyAlreadyAttachedError } from "@angular/cdk/overlay/typings/scroll/scroll-strategy";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();
  defaultRole = new Role();
  defaultGroup = new Group();
  constructor(private newService : CommonService, private myRoute: Router) {
    this.defaultRole.roleCode = 'customer';
    this.defaultRole.roleName = 'Customer';

    this.defaultGroup.groupCode = 'external';
    this.defaultGroup.groupName = 'External';
  }

  ngOnInit() {
  }

  isEmailAlredyExist(event, user){
    console.log(user);
    this.newService.isEmailExist(user).toPromise()
    .then(res => {
      if(res.length > 0){
        alert(user.email +" already exist.");
      }
      });
}

  register(user: User): void {
    this.newService.isEmailExist(user).toPromise()
    .then(res => {
      if(res.length === 0){
        user.userRoles = [this.defaultRole];
          user.userGroups = [this.defaultGroup];
          console.log(user);
          this.newService.saveUser(user)
          .subscribe(data =>  {
            this.myRoute.navigate([ 'login' ]);
          this.ngOnInit();
          } );
      } else {
        alert(user.email +" already exist.");
      }
      console.log(res);
    });
  }
}


