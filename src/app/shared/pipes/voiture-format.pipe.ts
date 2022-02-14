import { Pipe, PipeTransform } from '@angular/core';
import { Voiture } from '../../models/voiture.model';

@Pipe({
  name: 'voitureFormat'
})
export class VoitureFormatPipe implements PipeTransform {

  transform(voiture: Voiture, include_details?: boolean): string { //Si on met ?, on considère que les détails sont undefined
    return "Marque : "+ voiture.marque+ 
    " | Modèle : "+ voiture.modele + 
    (include_details ?
      " | Nombre de portes : "+ voiture.nbrPorte + 
      " | Puissance : "+ voiture.puissance+ " ch ": '');
    
  }

}
