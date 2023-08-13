import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserFormComponent } from './components/user-form/user-form.component';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent {

  constructor(private dialog: MatDialog) {}
  
  openUserModal(): void {
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '400px',
      data: {} // Puedes pasar datos adicionales al modal aquí si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Modal cerrado', result);
    });
  }
}
