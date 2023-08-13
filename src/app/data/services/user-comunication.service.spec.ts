import { TestBed } from '@angular/core/testing';

import { UserComunicationService } from './user-comunication.service';

describe('UserComunicationService', () => {
  let service: UserComunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserComunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
