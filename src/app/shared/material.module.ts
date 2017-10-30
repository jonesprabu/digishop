import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatGridListModule} from '@angular/material';
import {MatChipsModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatInputModule} from '@angular/material';



@NgModule({
  providers: [],
  imports: [MatButtonModule, 
            MatCheckboxModule,
            MatIconModule,
            MatCardModule,
            MatToolbarModule,
            MatListModule,
            MatGridListModule,
            MatChipsModule,
            MatSidenavModule,
            MatInputModule],
  exports: [MatButtonModule, 
            MatCheckboxModule,
            MatIconModule,
            MatCardModule,
            MatToolbarModule,
            MatListModule,
            MatGridListModule,
            MatChipsModule,
            MatSidenavModule,
            MatInputModule]
})
export class MaterialModule { }