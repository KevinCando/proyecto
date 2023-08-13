import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoleComponent } from './admin-role.component';
import { AdminRoleRoutingModule } from './admin-role-routing.module';
import { SidebarModule } from 'src/app/core/sidebar/sidebar.module';
import { RoleFormModule } from './components/role-form/role-form.module';
import { RoleListModule } from './components/role-list/role-list.module';

@NgModule({
  declarations: [
    AdminRoleComponent,
  ],
  imports: [
    CommonModule,
    AdminRoleRoutingModule,
    SidebarModule,
    RoleFormModule,
    RoleListModule
  ]
})
export class AdminRoleModule { }
