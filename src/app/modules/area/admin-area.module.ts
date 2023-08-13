import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAreaRoutingModule } from './admin-area-routing.module';
import { AdminAreaComponent } from './admin-area.component';
import { AreaFormModule } from './components/area-form/area-form.module';
import { AreaListModule } from './components/area-list/area-list.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AdminAreaComponent,
  ],
  imports: [
    CommonModule,
    AdminAreaRoutingModule,
    AreaFormModule,
    AreaListModule,
    RouterModule
  ],
  exports:[
    AdminAreaComponent
  ]
})
export class AdminAreaModule { }
