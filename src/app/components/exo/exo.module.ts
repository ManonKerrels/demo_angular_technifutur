import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciceCompoComponent } from './exercice-compo/exercice-compo.component';
import { FormsModule } from '@angular/forms';
import { ExoRoutingModule } from './exo-routing.module';



@NgModule({
  declarations: [
    ExerciceCompoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }