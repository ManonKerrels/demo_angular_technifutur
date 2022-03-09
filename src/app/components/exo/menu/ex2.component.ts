import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  listProduit: Produit[] = [{
    marque: 'Merdouille',
    modele: 'crotte',
    stock: 10,
    prix: 5,
    en_vente: true,
    id: 1
  },
  {
    marque: 'Kistaflette',
    modele: 'Biesse',
    stock: 15,
    prix: 2,
    en_vente: true,
    id: 2
  }
];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitted(){}

  ajout(){}

}
