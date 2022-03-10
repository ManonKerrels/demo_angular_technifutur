import { Component, OnInit } from '@angular/core';
import { PanierItem } from 'src/app/models/panier-item.model';
import { PanierService } from 'src/app/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  list!: PanierItem[];

  constructor(private service: PanierService) { 
    // this.list = service.getPanier();
    service.getPanierChanged().subscribe((panier) => this.list = panier);
  }

  ngOnInit(): void {
  }

  onDelete(item: PanierItem){
    this.service.removeFromCart(item.plat);
    // this.list = this.service.getPanier(); // TODO: effectivement on n'en a maintenant plus besoin
  }

}