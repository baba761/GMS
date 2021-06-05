import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UACRoutingModule } from './uac-routing.module';
import { SignupComponent } from './signup/signup.component';

import { MaterialModule } from '../material/material.module';
import { LoginComponent } from './login/login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,

  ],
  imports: [
    CommonModule,
    UACRoutingModule,
    MaterialModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  exports:[
    MaterialModule
  ]
})
export class UACModule { }
