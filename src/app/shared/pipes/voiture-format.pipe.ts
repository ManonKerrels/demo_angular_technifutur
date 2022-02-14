import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from '../../models/voiture.model';

@Pipe({
  name: 'voitureFormat'
})
export class VoitureFormatPipe implements PipeTransform {

  transform(voiture: Voiture): string {
    return "Marque : "+ voiture.marque+ 
    " | Modèle : "+ voiture.modele + 
    "| Nombre de portes : "+ voiture.nbrPorte + 
    "| Puissance : "+ voiture.puissance;
  }

}
