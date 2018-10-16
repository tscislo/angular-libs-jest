import { TestBed } from '@angular/core/testing';

import {ModalContainerComponent} from 'ngx-bootstrap/modal';

console.log(ModalContainerComponent)

import { NewLibService } from './new-lib.service';

describe('NewLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewLibService = TestBed.get(NewLibService);
    debugger
    expect(service).toBeTruthy();
    debugger
  });
});

