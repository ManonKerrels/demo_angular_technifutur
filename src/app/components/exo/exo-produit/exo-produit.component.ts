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

  displayed: boolean = false;
  displayed2: boolean = false;
  displayed3: boolean = false;
  

  tabProduit: Produit[] = [
    { marque: "Café", modele: "La Caféière", stock: 20, prix: 3, en_vente: true},
    { marque: "Thé", modele: "Vert", stock: 30, prix: 5, en_vente: true },
    { marque: "Thé", modele: "Noir", stock: 0, prix: 5, en_vente: false }
  ] 

  toggleDisplay1(param: any){
    this.displayed = !this.displayed;
    param.target.style.backgroundColor = 'red';
  }

  toggleDisplay2(param: any){
    this.displayed2 = !this.displayed2;
    param.target.style.backgroundColor = 'red';
  }

  toggleDisplay3(param: any){
    this.displayed3 = !this.displayed3;
    param.target.style.backgroundColor = 'red';
  }


}
