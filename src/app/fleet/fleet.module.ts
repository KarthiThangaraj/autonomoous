import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetComponent } from './fleet.component';
import { FleetRoutingModule } from './fleet-routing.module';
import { FileSelectDirective } from 'ng2-file-upload';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'fleet',
    component: FleetComponent
  }
];

@NgModule({
  declarations: [
    FleetComponent,
    FileSelectDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FleetRoutingModule,    
  ]
})
export class FleetModule { }
