import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { CustomerComponent } from './customer/customer.component';

import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{ path: 'customer', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
{ path:'user/:id',component:UserComponent},
{ path:'user1/:name',component:PersonaldetailsComponent},
{ path:'back',component:CustomerComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
