import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresComponent } from './stores.component';
import { Routes, RouterModule } from '@angular/router';
import { StoresRoutingModule } from './stores-routing.module';

const routes: Routes = [
  {
    path: 'stores',
    component: StoresComponent
  }
];

@NgModule({
  declarations: [StoresComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    StoresRoutingModule
  ]
})
export class StoresModule { }
