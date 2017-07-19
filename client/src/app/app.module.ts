import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import {MdCardModule,MdGridListModule,MdSidenavContainer,MdToolbar} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MdSidenavContainer
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdCardModule,
    NoopAnimationsModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
