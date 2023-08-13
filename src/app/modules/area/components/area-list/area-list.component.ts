import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Area } from 'src/app/data/interfaces/area';
import { AreaService } from 'src/app/data/services/api/area.service';
import { AreaFormComponent } from '../area-form/area-form.component';
import { ItemComunicationService } from 'src/app/data/services/item-comunication.service';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent {

  areas: MatTableDataSource<Area> = new MatTableDataSource<Area>();
  displayedColumns: string[] = ['id', 'name', 'actions'];
  color = "#7959A2";

  constructor(
    private areaService: AreaService,
    public dialog: MatDialog,
    private areaCommunicationService : ItemComunicationService,
  ) {}

  ngOnInit() {
    this.loadAreas();
    this.areaCommunicationService.itemUpdated$.subscribe(()=>{
      console.log("Entro");
      setTimeout(()=>{
        this.loadAreas();
      },500)
    });
  }

  loadAreas() {
    this.areaService.getAreas().subscribe(
      areas => {
        this.areas.data = areas;
      },
      error => {
        console.error('Error loading areas:', error);
      }
    );
  }

  openEditDialog(area: Area): void {
    const dialogRef = this.dialog.open(AreaFormComponent, {
      width: '500px',
      data: { area: area }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadAreas();
      }
    });
  }

  getRowClass(row: number) {
    return row % 2 === 0 ? 'even-row' : 'odd-row';
  }
}
