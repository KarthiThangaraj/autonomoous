import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { SupportRoutingModule } from './support-routing.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'support',
    component: SupportComponent
  }
];

@NgModule({
  declarations: [SupportComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SupportRoutingModule
  ]
})
export class SupportModule { }
