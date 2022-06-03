import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacotesComponent } from './pacotes.component';

describe('PacotesComponent', () => {
  let component: PacotesComponent;
  let fixture: ComponentFixture<PacotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
