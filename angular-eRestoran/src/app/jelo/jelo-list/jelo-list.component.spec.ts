import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeloListComponent } from './jelo-list.component';

describe('JeloListComponent', () => {
  let component: JeloListComponent;
  let fixture: ComponentFixture<JeloListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeloListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
