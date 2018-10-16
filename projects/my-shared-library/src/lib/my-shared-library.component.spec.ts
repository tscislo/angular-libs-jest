import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySharedLibraryComponent } from './my-shared-library.component';

describe('MySharedLibraryComponent', () => {
  let component: MySharedLibraryComponent;
  let fixture: ComponentFixture<MySharedLibraryComponent>;
  let http: any;
  let getSpy: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
        imports: [
          HttpClientTestingModule
        ],
        providers: [
          {
            provide: HttpClient,
            useValue: {
              get: jest.fn()
            }
          }
        ],
        declarations: [MySharedLibraryComponent]
      }
    )
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySharedLibraryComponent);
    component = fixture.componentInstance;
    http = TestBed.get(HttpClient);
    fixture.detectChanges();
    getSpy = spyOn<any>(http, 'get').and.returnValue({});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should invoke getAwesomeStuff', () => {
    component.ngOnInit();

    // Jest Spy
    expect(http.get.mock.calls.length).toBe(1);
    expect(http.get.mock.calls[0][0]).toBe('http://awesomeStuff');

    // Jasmine Spy
    // expect(getSpy).toHaveBeenCalledTimes(1);
    // expect(getSpy).toHaveBeenCalledWith('http://awesomeStuff');
  });

});
