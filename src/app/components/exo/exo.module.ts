import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceCompoComponent } from './exercice-compo/exercice-compo.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';
import { Ex2Component } from './ex2/ex2.component';
import { ExoComponent } from './exo.component';
import { ChronoComponent } from './chrono/chrono.component';



@NgModule({
  declarations: [
    ExerciceCompoComponent,
    Ex2Component,
    ExoComponent,
    ChronoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }