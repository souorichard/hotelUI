import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteisComponent } from './hoteis.component';

describe('HoteisComponent', () => {
  let component: HoteisComponent;
  let fixture: ComponentFixture<HoteisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoteisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
