import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'src/app/core/sidebar/sidebar.module';
import { VictimComponent } from './victim.component';
import { VictimRoutingModule } from './victim-routing.module';

@NgModule({
  declarations: [
    VictimComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    VictimRoutingModule
  ]
})
export class VictimModule { }
