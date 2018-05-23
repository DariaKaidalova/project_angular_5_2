import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from '../components/list/list.component';

const mainRoutes: Routes = [
  { path: 'tasks', component:  ListComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full'},
  { path: '**', redirectTo: '/tasks', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

