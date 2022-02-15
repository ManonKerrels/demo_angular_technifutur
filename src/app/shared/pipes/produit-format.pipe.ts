import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Pipe({
  name: 'produitFormat'
})
export class ProduitFormatPipe implements PipeTransform {

  transform(value: Produit, include_details?: string): string {
    return "Marque : " + value.marque +
    "Stock : " + value.stock +
    "Prix : " + value.prix +
    "En vente : " + value.en_vente;
    (include_details ? "Modèle : " + value.modele : '');
  }

}
