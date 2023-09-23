import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubRoutingModule } from './sub-routing.module';

import { ContactMeComponent } from './Views/contact-me/contact-me.component';
import { HomeComponent } from './Views/home/home.component';



@NgModule({
  declarations: [
    ContactMeComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule
  ]
})
export class PublicModule { }
