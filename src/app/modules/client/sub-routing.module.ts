import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PATHS_MODULE_CLIENT } from '@constants/routes';
import { DeveloperComponent } from './Views/developer/developer.component';
import { AdminViewComponent } from './Views/admin-view/admin-view.component';
import { authAdminGuard } from '@guard/auth-admin.guard';

const routes: Routes = [
  {
    path: PATHS_MODULE_CLIENT.developer,
    component: DeveloperComponent,
    // canActivate: [authAdminGuard]
  },
  {
    path: PATHS_MODULE_CLIENT.admin,
    component: AdminViewComponent,
    canActivate: [authAdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubRoutingModule {}
