import { Component } from '@angular/core';
import { User } from 'src/app/data/interfaces/user';
import { UsersService } from 'src/app/data/services/api/users.service';
import { ItemComunicationService } from 'src/app/data/services/item-comunication.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog'; 
import { UserFormComponent } from '../user-form/user-form.component'; 

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: MatTableDataSource<User> = new MatTableDataSource<User>();
  displayedColumns: string[] = ['id', 'name','pass','actions'];
  color = "#7959A2";
  isAlternateColor = false;

  constructor(private userService: UsersService,
              public dialog: MatDialog,
              private userCommunicationService: ItemComunicationService,
    ){}

  ngOnInit(){
    this.loadUsers();
    this.userCommunicationService.itemUpdated$.subscribe(()=>{
      console.log("Entro");
      setTimeout(() => {
        this.loadUsers();
        this.toggleAlternateColor();
      }, 500); // Espera 0.5 segundos antes de cargar
    });
  }

  loadUsers(){
    this.userService.getUsers().subscribe(
      users => {
        this.users.data = users;
        console.log(this.users.data);
      },
      error => {
        console.error('Error loading uses:', error);
      }
    )
  }

  openEditDialog(user: User): void {
    console.log(user);
    
    const dialogRef = this.dialog.open(UserFormComponent, {
      width: '500px', // Ajusta el ancho según tus necesidades
      data: { user: user }
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

  getRowClass(row:number) {
    return row % 2 === 0 ? 'even-row' : 'odd-row';
  }
}
