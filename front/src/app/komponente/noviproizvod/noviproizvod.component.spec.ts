import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviproizvodComponent } from './noviproizvod.component';

describe('NoviproizvodComponent', () => {
  let component: NoviproizvodComponent;
  let fixture: ComponentFixture<NoviproizvodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoviproizvodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviproizvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
