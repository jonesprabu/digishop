import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './shared/material.module';
import { SDKBrowserModule } from './shared/sdk/index';

import { AppComponent } from './app.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderlistComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    SDKBrowserModule.forRoot()
  ],
  providers: [],
  entryComponents : [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
