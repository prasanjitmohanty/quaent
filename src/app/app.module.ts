import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { PopoverModule }    from 'ng2-popover';
import {BusyModule} from 'angular2-busy';
 


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PopoverModule,
    BrowserAnimationsModule,
    BusyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
