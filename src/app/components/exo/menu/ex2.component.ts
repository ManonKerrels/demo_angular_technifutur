import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component implements OnInit {

  recupMenu: Produit;

  

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

  constructor(private service: MenuService) {
    this.recupMenu = service.getMenu();
    service.menuChoose.subscribe(info => this.recupMenu = info);
   }

  ngOnInit(): void {
  }

  onSubmitted(){}

  ajout(){
    this.service.changeMenu(this.recupMenu);
  }
  
  getMenu(){
    this.service.getMenu();
  }

}
