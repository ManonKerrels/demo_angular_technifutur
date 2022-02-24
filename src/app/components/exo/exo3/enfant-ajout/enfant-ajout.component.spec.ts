import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantAjoutComponent } from './enfant-ajout.component';

describe('EnfantAjoutComponent', () => {
  let component: EnfantAjoutComponent;
  let fixture: ComponentFixture<EnfantAjoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfantAjoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfantAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
