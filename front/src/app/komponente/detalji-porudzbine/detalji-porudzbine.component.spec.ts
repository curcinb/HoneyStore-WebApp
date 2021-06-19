import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiPorudzbineComponent } from './detalji-porudzbine.component';

describe('DetaljiPorudzbineComponent', () => {
  let component: DetaljiPorudzbineComponent;
  let fixture: ComponentFixture<DetaljiPorudzbineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaljiPorudzbineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiPorudzbineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
