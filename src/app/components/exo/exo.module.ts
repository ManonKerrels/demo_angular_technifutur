import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceCompoComponent } from './exercice-compo/exercice-compo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { Ex2Component } from './menu/ex2.component';
import { ExoComponent } from './exo.component';
import { ChronoComponent } from './chrono/chrono.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExoProduitComponent } from './exo-produit/exo-produit.component';
import { ParentCommuComponent } from './parent-commu/parent-commu.component';
import { Enfant1CommuComponent } from './enfant1-commu/enfant1-commu.component';
import { Enfant2CommuComponent } from './enfant2-commu/enfant2-commu.component';
import { ExoFormComponent } from './exo-form/exo-form.component';
import { Tp2Component } from './tp2/tp2.component';
import { Exo3Component } from './exo3/exo3.component';
import { EnfantAjoutComponent } from './exo3/enfant-ajout/enfant-ajout.component';
import { EnfantItemComponent } from './exo3/enfant-item/enfant-item.component';
import { PanierComponent } from './panier/panier.component';
import { ObjectifComponent } from './objectif/objectif.component';



@NgModule({
  declarations: [
    ExerciceCompoComponent,
    Ex2Component,
    ExoComponent,
    ChronoComponent,
    ExoProduitComponent,
    ParentCommuComponent,
    Enfant1CommuComponent,
    Enfant2CommuComponent,
    ExoFormComponent,
    Tp2Component,
    Exo3Component,
    EnfantAjoutComponent,
    EnfantItemComponent,
    PanierComponent,
    ObjectifComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ExoModule { }