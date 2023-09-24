import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubRoutingModule } from '@moduleClient/sub-routing.module';
import { ButtonComponent } from '@shared/button/button.component';

import { DeveloperComponent } from '@moduleClient/Views/developer/developer.component';

@NgModule({
  declarations: [
    DeveloperComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ReactiveFormsModule,
    ButtonComponent
  ]
})
export class ClientModule { }
