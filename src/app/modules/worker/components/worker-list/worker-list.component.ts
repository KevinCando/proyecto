import { Component } from '@angular/core';
import { Worker } from 'src/app/data/interfaces/worker';
import { WorkerService } from 'src/app/data/services/api/worker.service';
import { ItemComunicationService } from 'src/app/data/services/item-comunication.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { WorkerFormComponent } from '../worker-form/worker-form.component';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent {
  workers: MatTableDataSource<Worker> = new MatTableDataSource<Worker>();
  displayedColumns: string[] = ['id', 'names', 'surnames', 'actions'];
  color = '#7959A2';
  isAlternateColor = false;

  constructor(
    private workerService: WorkerService,
    public dialog: MatDialog,
    private workerCommunicationService: ItemComunicationService
  ) {}

  ngOnInit() {
    this.loadWorkers();
    this.workerCommunicationService.itemUpdated$.subscribe(() => {
      console.log('Entro');
      setTimeout(() => {
        this.loadWorkers();
        this.toggleAlternateColor();
      }, 500); // Espera 0.5 segundos antes de cargar
    });
  }

  loadWorkers() {
    this.workerService.getWorkers().subscribe(
      (workers) => {
        this.workers.data = workers;
        console.log(this.workers.data);
      },
      (error) => {
        console.error('Error loading workers:', error);
      }
    );
  }

  openEditDialog(worker: Worker): void {
    console.log(worker);

    const dialogRef = this.dialog.open(WorkerFormComponent, {
      width: '500px', // Ajusta el ancho según tus necesidades
      data: { worker: worker }
    });

    dialogRef.afterClosed().subscribe((result) => {
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
