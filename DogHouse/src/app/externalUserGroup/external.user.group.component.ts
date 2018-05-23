import { OnInit, Component } from "@angular/core";
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-external-user',
  templateUrl: './external.user.group.component.html',
  styleUrls: ['./external.user.group.component.css']
})
export class ExternalUserGroupComponent implements OnInit {
 
  constructor(private newService :CommonService,private myRoute: Router) {
  }

  ngOnInit() {
  }
}