import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MySharedLibraryComponent} from './my-shared-library.component';
import {HttpClient} from '@angular/common/http';

describe('MySharedLibraryComponent', () => {
  let component: MySharedLibraryComponent;
  let fixture: ComponentFixture<MySharedLibraryComponent>;
  let http: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule(
      {
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should invoke getAwesomeStuff', () => {
    expect(http.get.mock.calls.length).toBe(1);
    expect(http.get.mock.calls[0][0]).toBe('http://awesomeStuff');
    component.ngOnInit();
  });

});
