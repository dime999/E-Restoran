import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiNarudzbeComponent } from './detalji-narudzbe.component';

describe('DetaljiNarudzbeComponent', () => {
  let component: DetaljiNarudzbeComponent;
  let fixture: ComponentFixture<DetaljiNarudzbeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaljiNarudzbeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiNarudzbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
