import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceCompoComponent } from './exercice-compo/exercice-compo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { Ex2Component } from './ex2/ex2.component';
import { ExoComponent } from './exo.component';
import { ChronoComponent } from './chrono/chrono.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExoProduitComponent } from './exo-produit/exo-produit.component';
import { ParentCommuComponent } from './parent-commu/parent-commu.component';
import { Enfant1CommuComponent } from './enfant1-commu/enfant1-commu.component';
import { Enfant2CommuComponent } from './enfant2-commu/enfant2-commu.component';
import { ExoFormComponent } from './exo-form/exo-form.component';



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
    ExoFormComponent
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