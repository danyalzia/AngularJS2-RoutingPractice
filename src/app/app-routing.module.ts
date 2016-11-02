import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import {Component} from '@angular/core';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
	  { path: 'contact', component: ContactComponent },
	  { path: 'login', component: LoginComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}