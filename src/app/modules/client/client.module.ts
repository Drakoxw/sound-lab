import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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
import { AdminImagesComponent } from './Components/admin-images/admin-images.component';
import { LoadingComponent } from '@shared/loading/loading.component';
import { FilterFileAssetsPipe } from '@src/app/core/pipes/filter-file-assets.pipe';
import { ModalAdminImageComponent } from './Components/modal-admin-image/modal-admin-image.component';
import { BaseToStringPipe } from '@src/app/core/pipes/base-to-string.pipe';

@NgModule({
  declarations: [
    DeveloperComponent,
    AdminViewComponent,
    ButtonDevComponent,
    CreateTagsAdminComponent,
    CreateItemStoreComponent,
    AdminImagesComponent,
    FilterFileAssetsPipe,
    ModalAdminImageComponent,
    BaseToStringPipe
  ],
  imports: [
    CommonModule,
    SubRoutingModule,
    ReactiveFormsModule,
    ButtonComponent,
    FormsModule,
    FormInputComponent,
    FormSelectComponent,
    FormInputFileComponent,
    LoadingComponent,
    SweetAlert2Module
  ],
})
export class ClientModule {}
