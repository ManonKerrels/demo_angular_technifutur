import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoBindingComponent } from './components/demo/demo-binding/demo-binding.component';
import { ExerciceCompoComponent } from './components/exo/exercice-compo/exercice-compo.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { Page404Component } from './components/page404/page404.component';
import { VoitureFormatPipe } from './shared/pipes/voiture-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    Page404Component,
    VoitureFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AppComponent,
    VoitureFormatPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
