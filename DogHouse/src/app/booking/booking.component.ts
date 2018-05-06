import { Component, OnInit } from '@angular/core';

import { Booking } from '../models/dogBooking.model';
import {CommonService} from '../common.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booking = new Booking();
  constructor(private newService :CommonService,private myRoute: Router) {
  }

  ngOnInit() {
  }

  register(booking: Booking): void{
    console.log(booking);
  }
}