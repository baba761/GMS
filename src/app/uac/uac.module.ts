import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UACRoutingModule } from './uac-routing.module';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    SignupComponent,
     LoginComponent
  ],
  imports: [
    CommonModule,
    UACRoutingModule,
    MaterialModule
  ],
  exports:[
    MaterialModule
  ]
})
export class UACModule { }
