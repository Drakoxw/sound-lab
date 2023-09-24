import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PATHS_MODULE_CLIENT } from '@constants/routes';
import { DeveloperComponent } from './Views/developer/developer.component';

const routes: Routes = [
  {
    path: PATHS_MODULE_CLIENT.developer,
    component: DeveloperComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubRoutingModule {}
