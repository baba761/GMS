import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';
import { ModuleTreeComponent } from './module-tree/module-tree.component';

import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ModuleTreeComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,

  ],
  exports:[
    NavbarComponent,
    MaterialModule
  ]
})
export class DashboardModule { }
