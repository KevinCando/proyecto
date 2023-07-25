import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { SideItemModule } from './components/side-item/side-item.module';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    SideItemModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
