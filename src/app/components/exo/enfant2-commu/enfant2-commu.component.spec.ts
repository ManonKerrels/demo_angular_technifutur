import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enfant2CommuComponent } from './enfant2-commu.component';

describe('Enfant2CommuComponent', () => {
  let component: Enfant2CommuComponent;
  let fixture: ComponentFixture<Enfant2CommuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Enfant2CommuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Enfant2CommuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
