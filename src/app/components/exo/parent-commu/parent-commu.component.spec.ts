import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCommuComponent } from './parent-commu.component';

describe('ParentCommuComponent', () => {
  let component: ParentCommuComponent;
  let fixture: ComponentFixture<ParentCommuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCommuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentCommuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
