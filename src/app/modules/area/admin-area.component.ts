import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AreaFormComponent } from './components/area-form/area-form.component';

@Component({
  selector: 'app-admin-area',
  templateUrl: './admin-area.component.html',
  styleUrls: ['./admin-area.component.css']
})
export class AdminAreaComponent {
  constructor(private dialog: MatDialog) {}

  openAreaModal(): void {
    const dialogRef = this.dialog.open(AreaFormComponent, {
      width: '400px',
      data: {} // Puedes pasar datos adicionales al modal aquí si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado', result);
    });
  }
}
