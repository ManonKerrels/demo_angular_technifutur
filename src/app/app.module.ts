import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoBindingComponent } from './components/demo-binding/demo-binding.component';
import { ExerciceCompoComponent } from './components/exercice-compo/exercice-compo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoBindingComponent,
    ExerciceCompoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
