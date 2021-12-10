import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { CounterComponent } from './components/counter/counter.component';
import { ViewChildTeamplateVariablesComponent } from './components/view-child-teamplate-variables/view-child-teamplate-variables.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ViewChildComponent,
    CounterComponent,
    ViewChildTeamplateVariablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
