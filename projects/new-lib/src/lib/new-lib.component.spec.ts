import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLibComponent } from './new-lib.component';

describe('NewLibComponent', () => {
  let component: NewLibComponent;
  let fixture: ComponentFixture<NewLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
