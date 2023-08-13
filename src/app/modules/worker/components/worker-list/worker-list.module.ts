import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerListComponent } from './worker-list.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { WorkerFormModule } from '../worker-form/worker-form.module';

@NgModule({
  declarations: [
    WorkerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    WorkerFormModule
  ],
  exports:[
    WorkerListComponent
  ]
})
export class WorkerListModule { }
