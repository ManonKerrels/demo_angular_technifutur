import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  recupMenu: Produit;
  recupBool: boolean = false;

  constructor(private service: MenuService) {
    this.recupMenu = service.getMenu();
    service.menuChoose.subscribe(info => this.recupMenu = info);
   }

  ngOnInit(): void {
  }

  getMenu(){
    // alert("Panier récupéré !");
    this.service.getMenu();
  }

}
