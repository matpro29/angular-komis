import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './component/car/index/index.component';
import {EditComponent} from './component/car/edit/edit.component';
import {RegisterComponent} from './component/user/register/register.component';
import {LoginComponent} from './component/user/login/login.component';
import {MyComponent} from './component/car/my/my.component';
import {InfoComponent} from './component/car/info/info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/car',
    pathMatch: 'full'
  },
  {
    path: 'car',
    component: IndexComponent
  },
  {
    path: 'car/my',
    component: MyComponent
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
    path: 'car/info/:id',
    component: InfoComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
