import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SDKBrowserModule } from './shared/sdk/index';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  entryComponents : [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
