import { SignoutComponent } from './signout/signout.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component:SigninComponent
  },
  {
    path: 'Signup',
    component: SignupComponent
  },
  {
    path: 'signout',
    component: SignoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
