import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoleComponent } from './admin-role.component';
import { AdminRoleRoutingModule } from './admin-role-routing.module';
import { SidebarModule } from 'src/app/core/sidebar/sidebar.module';

@NgModule({
  declarations: [
    AdminRoleComponent,
  ],
  imports: [
    CommonModule,
    AdminRoleRoutingModule,
    SidebarModule
  ]
})
export class AdminRoleModule { }
