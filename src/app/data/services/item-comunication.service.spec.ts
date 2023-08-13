import { TestBed } from '@angular/core/testing';

import { ItemComunicationService } from './item-comunication.service';

describe('AreaComunicationService', () => {
  let service: ItemComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
