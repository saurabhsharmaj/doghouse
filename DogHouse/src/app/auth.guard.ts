import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
    private myRoute: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.auth.isLoggednIn()){
      let user = JSON.parse(this.auth.getUserRole());
      let isAdmin=false;
      for (let index in user.userRoles) {
        console.log(user.userRoles[index]);
        if(user.userRoles[index].roleCode ==='admin'){
          isAdmin= true;
          break;
        }
      }
      if(isAdmin){
        this.myRoute.navigate(["adminUser"]);   
      } else{
        this.myRoute.navigate(["externalUser"]);
      }
      return true;
    }else{
      this.myRoute.navigate(["login"]);
      return false;
    }
  }
}
