import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-exo-produit',
  templateUrl: './exo-produit.component.html',
  styleUrls: ['./exo-produit.component.css']
})
export class ExoProduitComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

  tabProduit: Produit[] = [
    { id: 1, marque: "Café", modele: "La Caféière", stock: 20, prix: 3, en_vente: true },
    { id: 2, marque: "Thé", modele: "Vert", stock: 30, prix: 5, en_vente: true },
    { id: 3, marque: "Thé", modele: "Noir", stock: 0, prix: 5, en_vente: false }
  ] 

  enVente(i: number){
    this.tabProduit[i].en_vente = !this.tabProduit[i].en_vente;
  }

  supprimer(i: number){
    delete this.tabProduit[i]
  }


}
