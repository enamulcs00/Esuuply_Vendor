import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotfoundComponent } from './404/not-found.component';
import { changepasswordComponent } from './lock/changepassword.component'; 
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';

import { AuthenticationRoutes } from './authentication.routing';
import { DetailFormComponent } from './detail-form/detail-form.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgOtpInputModule } from  'ng-otp-input';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild(AuthenticationRoutes),
    NgbModule,
    MatSlideToggleModule,
    NgOtpInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    GooglePlaceModule
  ],
  declarations: [
    NotfoundComponent,
    LoginComponent,
    SignupComponent,
    changepasswordComponent,
    Login2Component,
    Signup2Component,
    DetailFormComponent
  ],
 // providers: []
})
export class AuthenticationModule {}
