import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/car/list',
    pathMatch: 'full'
  },
  {
    path: 'car/list',
    component: ListComponent
  },
  {
    path: 'car/add',
    component: EditComponent
  },
  {
    path: 'car/edit/:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
