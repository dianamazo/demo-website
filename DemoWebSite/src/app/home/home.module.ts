import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ContainerComponent}
];

@NgModule({
  declarations: [ContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
