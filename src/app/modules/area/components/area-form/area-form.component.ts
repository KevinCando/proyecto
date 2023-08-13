import { Component, Inject, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Area } from 'src/app/data/interfaces/area';
import { AreaService } from 'src/app/data/services/api/area.service';
import { ItemComunicationService } from 'src/app/data/services/item-comunication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.css']
})
export class AreaFormComponent implements AfterViewInit{

  @ViewChild('areaForm') areaForm!: NgForm;
  isEditing: boolean = false;
  areaId: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<AreaFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private areaService: AreaService,
    private changeDetector: ChangeDetectorRef,
    private areaCommunicationService: ItemComunicationService
  ) {}

  onCancel() {
    this.dialogRef.close();
  }

  onSave(formData: Area) {
    if (this.isEditing && this.areaId !== null)  {
      formData.id = this.areaId;
      this.areaService.updateArea(formData).subscribe((response) => {
        console.log('Área actualizada', response);
      });
    } else {
      this.areaService.createArea(formData).subscribe((response) => {
        console.log('Área creada', response);
      });
    }
    this.areaCommunicationService.triggerItemUpdated();
    this.dialogRef.close();
  }

  ngAfterViewInit() {
    this.verifyData();
    this.changeDetector.detectChanges();
  }

  verifyData() {
    if (this.data && this.data.area) {
      this.isEditing = true;
      const areaToEdit: Area = this.data.area;
      this.areaId = areaToEdit.id;
      setTimeout(() => {
        this.areaForm.form.patchValue({
          name: areaToEdit.name
        });
      });
    }
  }
}
