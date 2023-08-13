import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminWorkerComponent } from './admin-worker.component';
import { AdminWorkerRoutingModule } from './admin-worker-routing.module';
import { SidebarModule } from 'src/app/core/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AdminWorkerComponent,
  ],
  imports: [
    CommonModule,
    AdminWorkerRoutingModule,
    SidebarModule
  ]
})
export class AdminWorkerModule { }
