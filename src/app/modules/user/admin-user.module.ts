import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminUserRoutingModule } from './admin-user-routing.module';
import { AdminUserComponent } from './admin-user.component';
import { RouterModule } from '@angular/router';
import { UserListModule } from './components/user-list/user-list.module';
import { UserFormModule } from './components/user-form/user-form.module';

@NgModule({
  declarations: [
    AdminUserComponent,
  ],
  imports: [
    CommonModule,
    AdminUserRoutingModule,
    RouterModule,
    UserListModule,
    UserFormModule
  ],
  exports:[
    AdminUserComponent
  ]
})
export class AdminUserModule { }
