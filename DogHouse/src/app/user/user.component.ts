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
  private anyErrors:boolean = false;
  private finished:boolean = false;
  p: number = 1;
  constructor(private newService :CommonService,
              private myRoute: Router) {
  }

  ngOnInit() {
    this.newService.getUsers()
    .subscribe(data =>  {
     //users=data;
     this.users=data;
      console.log(JSON.stringify(data));
      
    },
    error => this.anyErrors = true,
    () => this.finished = true)
  }

}


