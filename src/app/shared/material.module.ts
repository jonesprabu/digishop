import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatIconModule} from '@angular/material';

@NgModule({
  providers: [],
  imports: [MatButtonModule, 
            MatCheckboxModule,
            MatIconModule],
  exports: [MatButtonModule, 
            MatCheckboxModule,
            MatIconModule]
})
export class MaterialModule { }