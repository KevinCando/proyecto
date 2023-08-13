
import { Component, Input } from '@angular/core';
import { Form } from 'src/app/data/interfaces/form';
import { Area } from 'src/app/data/interfaces/area';
import { HttpClient } from '@angular/common/http';
import { MenuService } from 'src/app/data/services/menu.service';

@Component({
  selector: 'app-side-item',
  templateUrl: './side-item.component.html',
  styleUrls: ['./side-item.component.css']
})
export class SideItemComponent {

  @Input() areaId: number = 0;
  @Input() rolId: number = 0;

  forms : Form[] = [];
  area : Area = {
    id:0,
    name: ""
  };

  areas : Area[] =[];

  constructor( private http: HttpClient,
               private menuService : MenuService
    ){

  }

  ngOnInit(){
    this.chargeForms();
    this.chargeArea();
  }

  chargeForms(){
    const url = `http://localhost:8080/api/v1/form/list?areaId=${this.areaId}`;
    this.http.get<Form[]>(url).subscribe(
      response => {
        this.forms = response;
      },
      error => {
        console.error('Error al obtener la lista de formularios:', error);
      }
    );
  }

  chargeArea(){
    const url = `http://localhost:8080/api/v1/area/get?id=${this.areaId}`;
    this.http.get<Area>(url).subscribe(
      response => {
        this.area = response;
      },
      error =>{ console.error('Error al obtener la lista de formularios:', error)}
    );
  }
  
  chargeAreas(){
    const url = `http://localhost:8080/api/v1/area/all`;
    this.http.get<Area[]>(url).subscribe(
      response => {
        this.areas = response;
      },
      error =>{ console.error('Error al obtener la lista de formularios:', error)}
    );
  }

  navigateTo(route : string){
    this.menuService.navigateTo(route);
  }
}
