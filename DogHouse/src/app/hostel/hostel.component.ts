import { OnInit, Component } from "@angular/core";
import { Hostel } from '../models/hostel.model';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.css']
})
export class HostelComponent implements OnInit {
  hostel = new Hostel();
  constructor(private newService :CommonService,private myRoute: Router) {
  }

  ngOnInit() {
  }

  register(hostel: Hostel): void{
    console.log(hostel);
  }
}


