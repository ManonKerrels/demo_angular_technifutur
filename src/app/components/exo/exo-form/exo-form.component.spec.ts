import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoFormComponent } from './exo-form.component';

describe('ExoFormComponent', () => {
  let component: ExoFormComponent;
  let fixture: ComponentFixture<ExoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
