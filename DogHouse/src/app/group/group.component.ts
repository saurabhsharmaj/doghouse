import { User } from './../models/user.model';
import { OnInit, Component } from "@angular/core";
import {CommonService} from '../common.service';
import {Router} from '@angular/router';
import { Group } from "../models/group.model";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  private groups: Array<Group> = [];
  group = new Group();
  constructor(private newService :CommonService,
              private myRoute: Router) {
  }

  ngOnInit() {
    this.newService.getGroups()
    .subscribe(data =>  {
     this.groups=data;
    })
  }

  saveGroup(group: Group): void {
    console.log(group);
    this.newService.saveGroup(group)
    .subscribe(data =>  {
    this.ngOnInit();
    alert(group.groupName +' save sucessfully.');
    });
  }

  onDeleteGroup(groupId){
    console.log(groupId);
    this.newService.deleteGroup(groupId).subscribe(data =>  {
      alert(groupId +" has been deleted.");
      this.ngOnInit();
    });
  }

}


