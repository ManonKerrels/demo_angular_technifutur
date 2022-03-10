import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  plat!: Plat;

  @Output('add-to-panier')
  addToPanier= new EventEmitter<Plat>()

  constructor() { }

  ngOnInit(): void {
  }

  onAdd(){
    this.addToPanier.emit(this.plat);
  }

}