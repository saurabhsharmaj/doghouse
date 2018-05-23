import { OnInit, Component } from "@angular/core";
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin.user.group.component.html',
  styleUrls: ['./admin.user.group.component.css']
})
export class AdminUserGroupComponent implements OnInit {
 
  constructor(private newService :CommonService,private myRoute: Router) {
  }

  ngOnInit() {
  }
}