import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminWorkerComponent } from './admin-worker.component';
import { AdminWorkerRoutingModule } from './admin-worker-routing.module';
import { SidebarModule } from 'src/app/core/sidebar/sidebar.module';
import { WorkerFormModule } from './components/worker-form/worker-form.module';
import { WorkerListModule } from './components/worker-list/worker-list.module';

@NgModule({
  declarations: [
    AdminWorkerComponent,
  ],
  imports: [
    CommonModule,
    AdminWorkerRoutingModule,
    SidebarModule,
    WorkerFormModule,
    WorkerListModule
  ]
})
export class AdminWorkerModule { }
