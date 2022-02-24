import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoBindingComponent } from './demo-binding/demo-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExoRoutingModule } from './demo-routing.module';
import { DemoPipeComponent } from './demo-pipe/demo-pipe.component';
import { NavComponent } from './nav/nav.component';
import { DemoComponent } from './demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DemoDirectiveComponent } from './demo-directive/demo-directive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { DemoCommuComponent } from './demo-commu/demo-commu.component';
import { DemoCommuEnfantComponent } from './demo-commu-enfant/demo-commu-enfant.component';
import { GreenBgDirective } from './directives/green-bg.directive';
import { ChildTextDirective } from './directives/child-text.directive';
import { DemoFormsComponent } from './demo-forms/demo-forms.component';
import { ProduitsComponent } from './produits/produits.component';
import { InsertProduitFormComponent } from './produits/insert-produit-form/insert-produit-form.component';
import { ListProduitsComponent } from './produits/list-produits/list-produits.component';
import { ListProduitsItemComponent } from './produits/list-produits/list-produits-item/list-produits-item.component';



@NgModule({
  declarations: [
    DemoBindingComponent,
    DemoPipeComponent,
    NavComponent,
    DemoComponent,
    DemoDirectiveComponent,
    HighlightDirective,
    DemoCommuComponent,
    DemoCommuEnfantComponent,
    GreenBgDirective,
    ChildTextDirective,
    DemoFormsComponent,
    ProduitsComponent,
    InsertProduitFormComponent,
    ListProduitsComponent,
    ListProduitsItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ExoRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DemoModule { }