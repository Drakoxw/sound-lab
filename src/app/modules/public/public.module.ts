import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubRoutingModule } from './sub-routing.module';

import { ContactMeComponent } from './Views/contact-me/contact-me.component';
import { HomeComponent } from './Views/home/home.component';
import { EmailFormComponent } from './Components/email-form/email-form.component';
import { ButtonComponent} from '@shared/button/button.component';
import { LoginViewComponent } from './Views/login-view/login-view.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { ChatMeWhatsappComponent } from '@shared/chat-me-whatsapp/chat-me-whatsapp.component';

@NgModule({
  declarations: [
    ContactMeComponent,
    HomeComponent,
    EmailFormComponent,
    LoginViewComponent,
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ReactiveFormsModule,

    ButtonComponent,
    FooterComponent,
    ChatMeWhatsappComponent
  ]
})
export class PublicModule { }
