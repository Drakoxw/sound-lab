import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PATHS_MODULE_CLIENT } from '@constants/routes';

import { HomeComponent } from './Views/home/home.component';
import { ContactMeComponent } from './Views/contact-me/contact-me.component';
import { LoginViewComponent } from './Views/login-view/login-view.component';

const routes: Routes = [
  {
    path: PATHS_MODULE_CLIENT.root,
    component: HomeComponent,
  },
  {
    path: PATHS_MODULE_CLIENT.home,
    component: HomeComponent,
  },
  {
    path: PATHS_MODULE_CLIENT.contactUs,
    component: ContactMeComponent,
  },
  {
    path: PATHS_MODULE_CLIENT.login,
    component: LoginViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubRoutingModule {}
