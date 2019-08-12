import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatGheBusComponent } from './dat-ghe-bus.component';
import { ListGheComponent } from './list-ghe/list-ghe.component';
import { GheComponent } from './ghe/ghe.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [DatGheBusComponent, ListGheComponent, GheComponent],
  exports:[DatGheBusComponent],
  imports: [
    CommonModule,FormsModule
  ]
})
export class DatGheBusModule { }
