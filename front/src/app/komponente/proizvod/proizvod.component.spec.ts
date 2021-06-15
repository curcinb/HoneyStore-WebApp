import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodComponent } from './proizvod.component';

describe('ProizvodComponent', () => {
  let component: ProizvodComponent;
  let fixture: ComponentFixture<ProizvodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProizvodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProizvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
