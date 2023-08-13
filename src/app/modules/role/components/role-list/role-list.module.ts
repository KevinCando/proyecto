import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RoleFormModule } from '../role-form/role-form.module';

@NgModule({
  declarations: [
    RoleListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    RoleFormModule
  ],
  exports:[
    RoleListComponent
  ]
})
export class RoleListModule { }
