import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciceCompoComponent } from './exercice-compo.component';

describe('ExerciceCompoComponent', () => {
  let component: ExerciceCompoComponent;
  let fixture: ComponentFixture<ExerciceCompoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciceCompoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciceCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
