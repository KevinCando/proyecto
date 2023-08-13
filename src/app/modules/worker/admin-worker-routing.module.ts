import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminWorkerComponent } from './admin-worker.component';

const routes: Routes = [
  {path : '', component: AdminWorkerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminWorkerRoutingModule { }
