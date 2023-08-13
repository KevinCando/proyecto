import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RoleFormComponent } from './components/role-form/role-form.component';

@Component({
  selector: 'app-admin-role',
  templateUrl: './admin-role.component.html',
  styleUrls: ['./admin-role.component.css']
})
export class AdminRoleComponent {
  constructor(private dialog: MatDialog) {}

  openRoleModal(): void {
    const dialogRef = this.dialog.open(RoleFormComponent, {
      width: '400px',
      data: {} // Puedes pasar datos adicionales al modal aquí si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado', result);
    });
  }
}
