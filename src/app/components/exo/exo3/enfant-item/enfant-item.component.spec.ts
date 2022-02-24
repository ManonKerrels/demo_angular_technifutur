import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantItemComponent } from './enfant-item.component';

describe('EnfantItemComponent', () => {
  let component: EnfantItemComponent;
  let fixture: ComponentFixture<EnfantItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
