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

  en_vente: boolean = false;
  select: string = "Produit 1";
  

  tabProduit: Produit[] = [
    { id: 1, marque: "Café", modele: "La Caféière", stock: 20, prix: 3, en_vente: true},
    { id: 2, marque: "Thé", modele: "Vert", stock: 30, prix: 5, en_vente: true },
    { id: 3, marque: "Thé", modele: "Noir", stock: 0, prix: 5, en_vente: false }
  ] 

  enVente(i: number){
    this.en_vente = !this.en_vente;
  }


}
