import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import {DatatableComponent} from './datatable.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'datatable',
    pathMatch: 'full'
  },
  {
    path: 'datatable',
    component: DatatableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }
