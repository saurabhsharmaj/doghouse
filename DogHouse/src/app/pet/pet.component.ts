import { OnInit, Component } from "@angular/core";
import { DogDetail } from '../models/dog.model';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petobj = new DogDetail();
  constructor(private newService :CommonService,private myRoute: Router) {
  }

  ngOnInit() {
  }

  petregister(petobj: DogDetail): void{
    console.log(petobj);    
    this.newService.saveUser(petobj)
    .subscribe(data =>  {
      this.myRoute.navigate(["login"]);
    this.ngOnInit();
    })
  }
}


