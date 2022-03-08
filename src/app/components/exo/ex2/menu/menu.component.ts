import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  listProduit: string[] = [
    'Café',
    'Thé',
    'Nalu',
    'Bière',
    'Soda'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
