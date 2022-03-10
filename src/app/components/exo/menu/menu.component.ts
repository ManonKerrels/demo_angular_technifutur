import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat.model';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Plat[]= [
    {
      nom: 'pate',
      type: 'plat',
      prix: 8
    },
    {
      nom: 'pizza',
      type: 'plat',
      prix: 12
    },
    {
      nom: 'croquettes',
      type: 'entree',
      prix: 7
    },
    {
      nom: 'glace',
      type: 'dessert',
      prix: 4
    },

  ]

  constructor(private service: PanierService) { }

  ngOnInit(): void {
  }

  onAdd(plat: Plat){
    this.service.addToCart(plat);
  }

}