import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'analytics',
    component: AnalyticsComponent
  }
];
@NgModule({
  declarations: [
    AnalyticsComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    RouterModule.forChild(routes)
  ]
})
export class AnalyticsModule { }
