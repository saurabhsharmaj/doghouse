import { OnInit, Component } from "@angular/core";
import { User } from '../models/user.model';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();
  constructor(private newService :CommonService,private myRoute: Router) {
  }

  ngOnInit() {
  }

  register(user: User): void{
    console.log(user);    
    this.newService.saveUser(user)
    .subscribe(data =>  {
      this.myRoute.navigate(["login"]);
    this.ngOnInit();
    })
  }
}


