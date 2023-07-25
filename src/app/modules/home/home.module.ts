import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule } from 'src/app/core/header/header.module';
import { SidebarModule } from 'src/app/core/sidebar/sidebar.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    SidebarModule
  ]
})
export class HomeModule { }
