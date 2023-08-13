import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SidebarModule } from 'src/app/core/sidebar/sidebar.module';
import { AdminUserModule } from '../user';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SidebarModule,
    AdminUserModule,
    RouterModule,
  ]
})
export class HomeModule { }
