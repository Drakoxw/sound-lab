import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubRoutingModule } from './sub-routing.module';

import { ContactMeComponent } from './Views/contact-me/contact-me.component';
import { HomeComponent } from './Views/home/home.component';
import { EmailFormComponent } from './Components/email-form/email-form.component';



@NgModule({
  declarations: [
    ContactMeComponent,
    HomeComponent,
    EmailFormComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule
  ]
})
export class PublicModule { }
