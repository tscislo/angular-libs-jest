import {TestBed} from '@angular/core/testing';

import {MySharedLibraryService} from './my-shared-library.service';

describe('MySharedLibraryService', () => {
  let service: MySharedLibraryService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySharedLibraryService]
    });
    service = TestBed.get(MySharedLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should getCountriesWithPopulationGrater get countries with population grater then given', () => {
  //   expect(service.getCountriesWithPopulationGrater(20)).toMatchSnapshot();
  // });

});
