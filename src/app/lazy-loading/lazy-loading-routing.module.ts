import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadingComponent } from './lazy-loading.component';

const routes: Routes = [
  { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) },
  { path: '', component: LazyLoadingComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
