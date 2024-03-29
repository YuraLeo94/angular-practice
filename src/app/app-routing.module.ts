import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewChildComponent } from './components/view-child/view-child.component';

const routes: Routes = [
  { path: 'view-child', component: ViewChildComponent },
  { path: '**', component: HomePageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
