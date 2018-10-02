import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
/*
  - imports: bring in other angular modules that your module will need
  - declaraions: make components, directives, pipes available to your module that don't come from another module
  - bootstrap: lets angular know which component(s) will be the starting point for the bootstrap process.. bascially the entry point for app code
*/
@NgModule ({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {

}