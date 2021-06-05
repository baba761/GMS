import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { FrontendLayoutComponent } from './layouts/frontend-layout/frontend-layout.component';
import { BACKEND_ROUTES } from './Routes/Backend-Layout-Routes';
import { FRONTEND_ROUTES } from './Routes/Frontend-Layout-routes';

const routes: Routes = [
  {
    path:'',
    component:FrontendLayoutComponent,
    children:FRONTEND_ROUTES
  },
  {
    path:'dashboard',
    component:BackendLayoutComponent,
    children:BACKEND_ROUTES
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
