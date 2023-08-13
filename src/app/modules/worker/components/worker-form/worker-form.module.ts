import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerFormComponent } from './worker-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
 

@NgModule({
  declarations: [
    WorkerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports:[
    WorkerFormComponent
  ]
})
export class WorkerFormModule { }
