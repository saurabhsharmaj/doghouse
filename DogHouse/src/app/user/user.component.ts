﻿import { OnInit, Component } from "@angular/core";
import { User } from '../models/user.model';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  constructor(users:User[],private newService :CommonService,private myRoute: Router) {
  }

  ngOnInit() {
    this.newService.getUsers()
    .subscribe(data =>  {
     users=data;
      console.log(data.length);
    })
  }

}


