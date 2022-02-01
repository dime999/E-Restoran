import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KorpaIndexComponent } from './korpa-index.component';

describe('KorpaIndexComponent', () => {
  let component: KorpaIndexComponent;
  let fixture: ComponentFixture<KorpaIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KorpaIndexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KorpaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
