import { Component, Inject, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { Role } from 'src/app/data/interfaces/role';
import { Area } from 'src/app/data/interfaces/area';
import { ItemComunicationService } from 'src/app/data/services/item-comunication.service'; 
import { RoleService } from 'src/app/data/services/api/role.service';
import { AreaService } from 'src/app/data/services/api/area.service';

@Component({
  selector: 'app-role-form',
  templateUrl: './role-form.component.html',
  styleUrls: ['./role-form.component.css']
})
export class RoleFormComponent implements AfterViewInit {

  @ViewChild('roleForm') roleForm!: NgForm; 
  roles: Role[] = [];
  areas: Area[] = []; // Asegúrate de que esta variable esté cargada con las áreas disponibles
  isEditing: boolean = false;
  roleId: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<RoleFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private changeDetector: ChangeDetectorRef,
    private roleCommunicationService: ItemComunicationService,
    private roleService : RoleService,
    private areaService : AreaService,
  ) {}

  ngAfterViewInit() {
    this.loadAreas();
    this.verifyData();
    this.changeDetector.detectChanges();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave(formData: Role) {
    console.log(formData);
    if(this.isEditing && this.roleId!= null){
      formData.id = this.roleId;
      this.roleService.updateRole(formData).subscribe((response)=>{
        console.log("Rol actualizado", response);
      });
    }else{
      this.roleService.creareRole(formData).subscribe((response) => {
        console.log("Rol creado", response);
      })
    }
    this.roleCommunicationService.triggerItemUpdated();

    this.dialogRef.close();
  }

  loadAreas(){
    this.areaService.getAreas().subscribe((areas)=>{
      this.areas = areas;
    });
  }

  verifyData() {
    if (this.data && this.data.role) {
      console.log(this.data);
      console.log(this.data.role);
      this.isEditing = true;
      const roleToEdit: Role = this.data.role;
      this.roleId = roleToEdit.id;
      setTimeout(() => {
        this.roleForm.form.patchValue({
          name: roleToEdit.name,
          description: roleToEdit.description,
          areaId: roleToEdit.areaId // Asegúrate de que esta propiedad se llame "areaId"
        });
      });
    }
  }
}
