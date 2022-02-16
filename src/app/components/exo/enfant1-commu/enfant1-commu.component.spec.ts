import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enfant1CommuComponent } from './enfant1-commu.component';

describe('Enfant1CommuComponent', () => {
  let component: Enfant1CommuComponent;
  let fixture: ComponentFixture<Enfant1CommuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enfant1CommuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Enfant1CommuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
