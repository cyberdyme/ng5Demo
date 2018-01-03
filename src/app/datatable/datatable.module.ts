import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable.component';
import {DataTableRoutingModule} from './datatable-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DataTableRoutingModule
  ],
  declarations: [DatatableComponent]
})
export class DatatableModule { }
