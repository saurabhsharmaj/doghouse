import { CommonService } from './common.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EqualValidatorDirective } from './shared/equal.validator.directive';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PetComponent } from './pet/pet.component';
import { HostelComponent } from './hostel/hostel.component';
import { GroupComponent } from './group/group.component';
import { RoleComponent } from './role/role.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { BookingComponent } from './booking/booking.component';

const myRoots: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' , canActivate: [AuthGuard]},
  { path: 'register', component: RegistrationComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'hostel', component: HostelComponent },
  { path: 'login', component: LoginComponent},
  { path: 'users', component: UserComponent},
  { path: 'pet', component: PetComponent},
  { path: 'role', component: RoleComponent},
  { path: 'group', component: GroupComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegistrationComponent,
    LoginComponent,
    UserComponent,
    PetComponent,
    GroupComponent,
    RoleComponent,
    EqualValidatorDirective,
    BookingComponent,
    HostelComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule,HttpModule,
    NgxPaginationModule,RouterModule.forRoot(myRoots)
  ],
  providers: [AuthService, AuthGuard,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
