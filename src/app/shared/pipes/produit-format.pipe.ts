import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Pipe({
  name: 'produitFormat'
})
export class ProduitFormatPipe implements PipeTransform {

  transform(value: Produit, include_details?: boolean): string {
    return "Marque : " + value.marque +
    "Modèle : " + value.modele +
    "Stock : " + value.stock +
    "Prix : " + value.prix;
    (include_details ? 
      "En vente : " + value.en_vente: false +
      "Id : " + value.id);
  }

}
