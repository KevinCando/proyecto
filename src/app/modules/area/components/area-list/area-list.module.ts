import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaListComponent } from './area-list.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { AreaFormModule } from '../area-form/area-form.module';

@NgModule({
  declarations: [
    AreaListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    AreaFormModule
  ],
  exports:[
    AreaListComponent
  ]
})
export class AreaListModule { }
