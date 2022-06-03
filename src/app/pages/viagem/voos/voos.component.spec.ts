import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoosComponent } from './voos.component';

describe('VoosComponent', () => {
  let component: VoosComponent;
  let fixture: ComponentFixture<VoosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
