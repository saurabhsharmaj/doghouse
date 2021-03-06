import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {CommonService} from '../common.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  form;
  errorMsg: String = '';
  constructor(private fb: FormBuilder, private newService: CommonService,
    private myRoute: Router,
    private auth: AuthService) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  login(user: User) {
    console.log(user);
    if (this.form.valid) {
      //check in db.

      this.newService.login(user)
                      .subscribe(data =>  {
                        this.newService.isEmailExist(user)
                        .toPromise().then(res => {
                                    console.log(res[0]);
                                  if ( data.length > 0 ) {
                                      res[0].password = '';
                                      this.auth.sendToken(JSON.stringify(res[0]));
                                      console.log(data);
                                      this.myRoute.navigate(['home']);
                                      this.ngOnInit();
                                    } else {
                                      this.myRoute.navigate(['login']);
                                      this.errorMsg = 'Invalid Username or password.';
                                      this.ngOnInit();
                                    }
                                  }, function e(response){})
                      });
      }
    }
}
