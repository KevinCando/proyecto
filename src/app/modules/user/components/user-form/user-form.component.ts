import { Component, Inject, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RoleService } from 'src/app/data/services/api/role.service';
import { WorkerService } from 'src/app/data/services/api/worker.service';
import { UsersService } from 'src/app/data/services/api/users.service';
import { NgForm } from '@angular/forms';

import { Role } from 'src/app/data/interfaces/role';
import { Worker } from 'src/app/data/interfaces/worker';
import { User } from 'src/app/data/interfaces/user';
import { UserCommunicationService } from 'src/app/data/services/user-comunication.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements AfterViewInit {

  @ViewChild('userForm') userForm!: NgForm;
  roles: Role[] = [];
  workers: Worker[] = [];
  isEditing: boolean = false;
  userId: number | null = null;

  constructor(
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private roleService: RoleService,
    private workerService: WorkerService,
    private userService: UsersService,
    private changeDetector: ChangeDetectorRef,
    private userCommunicationService: UserCommunicationService
  ) {}

  ngAfterViewInit() {
    this.loadRoles();
    this.loadWorkers();
    this.verifyData();
    this.changeDetector.detectChanges();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSave(formData: User) {
    console.log(formData);
    if (this.isEditing && this.userId!=null)  {
      formData.id = this.userId;
      this.userService.updateUser(formData).subscribe((response) => {
        console.log('Usuario actualizado', response);
      });
    } else {
      this.userService.createUser(formData).subscribe((response) => {
        console.log('Usuario creado', response);
      });
    }
    this.userCommunicationService.triggerUserUpdated();
    this.dialogRef.close();
  }

  loadRoles() {
    this.roleService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  loadWorkers() {
    this.workerService.getWorkers().subscribe((workers) => {
      this.workers = workers;
    });
  }

  verifyData() {
    if (this.data && this.data.user) {
      console.log(this.data);
      console.log(this.data.user);
      this.isEditing = true;
      const userToEdit: User = this.data.user;
      this.userId = userToEdit.id;
      setTimeout(() => {
        this.userForm.form.patchValue({
          roleId: userToEdit.roleId,
          workId: userToEdit.workId,
          name: userToEdit.name,
          pass: userToEdit.pass
        });
      });
    }
  }
}
