import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { StudentComponent } from './student/student.component';
import { About } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { TestComponent } from './test/test.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent
    ,StudentComponent
    ,About
    ,TestComponent
    ,NavComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
