import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubRoutingModule } from '@moduleClient/sub-routing.module';
import { ButtonComponent } from '@shared/button/button.component';

import { DeveloperComponent } from '@moduleClient/Views/developer/developer.component';
import { AdminViewComponent } from './Views/admin-view/admin-view.component';
import { ButtonDevComponent } from './Components/button-dev/button-dev.component';
import { CreateTagsAdminComponent } from './Components/create-tags-admin/create-tags-admin.component';
import { CreateItemStoreComponent } from './Components/create-item-store/create-item-store.component';
import { FormInputComponent } from '@shared/form-input/form-input.component';
import { FormSelectComponent } from '@shared/form-select/form-select.component';
import { FormInputFileComponent } from '@shared/form-input-file/form-input-file.component';

@NgModule({
  declarations: [
    DeveloperComponent,
    AdminViewComponent,
    ButtonDevComponent,
    CreateTagsAdminComponent,
    CreateItemStoreComponent
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ReactiveFormsModule,
    ButtonComponent,
    FormsModule,
    FormInputComponent,
    FormSelectComponent,
    FormInputFileComponent
  ]
})
export class ClientModule { }
