import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoitureFormatPipe } from './pipes/voiture-format.pipe';
import { ChronoFormatPipe } from './pipes/chrono-format.pipe';
import { ProduitFormatPipe } from './pipes/produit-format.pipe';



@NgModule({
  declarations: [VoitureFormatPipe, ChronoFormatPipe, ProduitFormatPipe],
  imports: [
    CommonModule
  ],
  exports: [ VoitureFormatPipe, ChronoFormatPipe ]
})
export class SharedModule { }
