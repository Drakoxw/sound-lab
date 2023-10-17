import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { NgxJsonLdModule } from '@ngx-lite/json-ld';

import { ChatMeWhatsappComponent } from '@shared/chat-me-whatsapp/chat-me-whatsapp.component';
import { NavBarComponent } from '@shared/nav-bar/nav-bar.component';
import { FooterComponent } from '@shared/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthorizationInterceptor } from './core/interceptors/authorization.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxJsonLdModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ChatMeWhatsappComponent,
    NavBarComponent,
    FooterComponent,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
