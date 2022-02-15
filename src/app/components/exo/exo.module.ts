import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceCompoComponent } from './exercice-compo/exercice-compo.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { Ex2Component } from './ex2/ex2.component';
import { ExoComponent } from './exo.component';
import { ChronoComponent } from './chrono/chrono.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExoProduitComponent } from './exo-produit/exo-produit.component';



@NgModule({
  declarations: [
    ExerciceCompoComponent,
    Ex2Component,
    ExoComponent,
    ChronoComponent,
    ExoProduitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }