import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoProduitComponent } from './exo-produit.component';

describe('ExoProduitComponent', () => {
  let component: ExoProduitComponent;
  let fixture: ComponentFixture<ExoProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoProduitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
