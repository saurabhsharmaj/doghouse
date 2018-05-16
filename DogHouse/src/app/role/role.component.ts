import { User } from './../models/user.model';
import { Role } from './../models/role.model';
import { OnInit, Component } from "@angular/core";
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  private roles: Array<Role> = [];
  role = new Role();
  constructor(private newService :CommonService,
              private myRoute: Router) {
  }

  ngOnInit() {
   
    this.newService.getRoles()
    .subscribe(data =>  {
     this.roles=data;
      
    })
  }

  saveRole(role: Role): void {
    console.log(role);
    this.newService.saveRole(role)
    .subscribe(data =>  {
    this.ngOnInit();
    alert(role.roleName +' save sucessfully.');
    });
  }

}


