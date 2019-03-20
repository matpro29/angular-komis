import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './car/list/list.component';
import {EditComponent} from './car/edit/edit.component';
import {RegisterComponent} from './user/register/register.component';

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
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
