import { Component, Inject, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AreaService } from 'src/app/data/services/api/area.service';
import { WorkerService } from 'src/app/data/services/api/worker.service';
import { NgForm } from '@angular/forms';
import { Worker } from 'src/app/data/interfaces/worker';
import { ItemComunicationService } from 'src/app/data/services/item-comunication.service';
import { Area } from 'src/app/data/interfaces/area';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements AfterViewInit {

  @ViewChild('workerForm') workerForm!: NgForm; 
  areas: Area[] = []; // Asegúrate de cargar las áreas disponibles
  isEditing: boolean = false;
  workerId: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<WorkerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private areaService: AreaService,
    private workerService: WorkerService,
    private changeDetector: ChangeDetectorRef,
    private workerCommunicationService: ItemComunicationService
  ) {}

  ngAfterViewInit() {
    this.loadAreas();
    this.verifyData();
    this.changeDetector.detectChanges();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave(formData: Worker) {
    console.log(formData);
    if (this.isEditing && this.workerId !== null) {
      formData.id = this.workerId;
      this.workerService.updateWorker(formData).subscribe((response) => {
        console.log('Trabajador actualizado', response);
      });
    } else {
      this.workerService.createWorker(formData).subscribe((response) => {
        console.log('Trabajador creado', response);
      });
    }
    this.workerCommunicationService.triggerItemUpdated();
    this.dialogRef.close();
  }

  loadAreas() {
    this.areaService.getAreas().subscribe((areas) => {
      this.areas = areas;
    });
  }

  verifyData() {
    if (this.data && this.data.worker) {
      console.log(this.data);
      console.log(this.data.worker);
      this.isEditing = true;
      const workerToEdit: Worker = this.data.worker;
      this.workerId = workerToEdit.id;
      setTimeout(() => {
        this.workerForm.form.patchValue({
          areaId: workerToEdit.areaId,
          names: workerToEdit.names,
          surnames: workerToEdit.surnames
        });
      });
    }
  }
}
