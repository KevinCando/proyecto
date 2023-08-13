import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemComunicationService {

  private itemUpdatedSource = new Subject<void>();

  itemUpdated$ = this.itemUpdatedSource.asObservable();

  triggerItemUpdated() {
    this.itemUpdatedSource.next();
  } 
}
