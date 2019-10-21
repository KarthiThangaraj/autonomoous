import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FleetComponent } from './fleet.component';


const routes: Routes = [
    {
      path: '',
      component: FleetComponent
      // children: [
      //   {
      //     path : 'fleet',

      //   }
      // ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FleetRoutingModule { }
