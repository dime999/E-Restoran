import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviessListComponent } from './moviess-list.component';

describe('MoviessListComponent', () => {
  let component: MoviessListComponent;
  let fixture: ComponentFixture<MoviessListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviessListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
