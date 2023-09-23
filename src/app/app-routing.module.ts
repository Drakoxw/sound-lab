import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MODULES } from '@constants/routes';

const routes: Routes = [
  {
    path: MODULES.PUBLIC,
    loadChildren: () =>
      import('@modulePublic/public.module').then((m) => m.PublicModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
