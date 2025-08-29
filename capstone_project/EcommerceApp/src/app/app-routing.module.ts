import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { NgClass } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from 'express';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { 
    path: 'customer', 
    loadChildren: () => import('./customers/customers').then(m => m.Customers) 
  },
  { 
    path: 'admin', 
    loadChildren: () => import('./admin/admin').then(m => m.Admin) 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{
  
}
export const routingComponents=[Login,Signup]