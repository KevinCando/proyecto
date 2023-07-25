import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { SideItemComponent } from './side-item.component';

@NgModule({
  declarations: [
    SideItemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatMenuModule
  ],
  exports: [
    SideItemComponent
  ]
})
export class SideItemModule { }
