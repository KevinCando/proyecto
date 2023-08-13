import { Component } from '@angular/core';
import { Role } from 'src/app/data/interfaces/role';
import { RoleService } from 'src/app/data/services/api/role.service';
import { ItemComunicationService } from 'src/app/data/services/item-comunication.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'; 
import { RoleFormComponent } from '../role-form/role-form.component'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent {
  roles: MatTableDataSource<Role> = new MatTableDataSource<Role>();
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  color = "#7959A2";
  isAlternateColor = false;

  constructor(private roleService: RoleService,
              public dialog: MatDialog,
              private roleCommunicationService: ItemComunicationService,
    ){}

  ngOnInit(){
    this.loadRoles();
    this.roleCommunicationService.itemUpdated$.subscribe(()=>{
      console.log("Entro");
      setTimeout(() => {
        this.loadRoles();
        this.toggleAlternateColor();
      }, 500); // Espera 0.5 segundos antes de cargar
    });
  }

  loadRoles(){
    this.roleService.getRoles().subscribe(
      roles => {
        this.roles.data = roles;
        console.log(this.roles.data);
      },
      error => {
        console.error('Error loading roles:', error);
      }
    )
  }

  openEditDialog(role: Role): void {
    console.log(role);
    
    const dialogRef = this.dialog.open(RoleFormComponent, {
      width: '500px', // Ajusta el ancho según tus necesidades
      data: { role: role }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Realiza acciones después de cerrar el modal (si es necesario)
      }
    });
  }

  // Cambiar el color de fila alternado
  toggleAlternateColor() {
    this.isAlternateColor = !this.isAlternateColor;
  }

  getRowClass(row: number) {
    return row % 2 === 0 ? 'even-row' : 'odd-row';
  }
}
