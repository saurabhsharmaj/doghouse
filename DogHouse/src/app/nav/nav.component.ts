import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../models/user.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private loading: boolean = false;
  private results: Observable<User[]>;
  private searchField: FormControl;


  searchKeyword: string;
  constructor(private newService :CommonService,private auth: AuthService) {
    this.searchKeyword = '';
   }

  ngOnInit() {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges
        .debounceTime(1000)
        .distinctUntilChanged()
        .do(_ => this.loading = true)
        .switchMap(term => this.newService.searchUser(term))
        .do(_ => this.loading = false);
  }

  doSearch(term: string) {
    this.newService.searchUser(term);
  }
}
