import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WorkerFormComponent } from './components/worker-form/worker-form.component';

@Component({
  selector: 'app-admin-worker',
  templateUrl: './admin-worker.component.html',
  styleUrls: ['./admin-worker.component.css']
})
export class AdminWorkerComponent {
  constructor(private dialog: MatDialog) {}
  
  openWorkerModal(): void {
    const dialogRef = this.dialog.open(WorkerFormComponent, {
      width: '400px',
      data: {} // Puedes pasar datos adicionales al modal aquí si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado', result);
    });
  }
}
