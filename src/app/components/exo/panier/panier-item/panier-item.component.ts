import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PanierItem } from 'src/app/models/panier-item.model';

@Component({
  selector: 'app-panier-item',
  templateUrl: './panier-item.component.html',
  styleUrls: ['./panier-item.component.css']
})
export class PanierItemComponent implements OnInit {

  @Input()
  panierItem!: PanierItem;

  deleteConfirmation: boolean = false;

  @Output('delete')
  deleteEmitter = new EventEmitter<PanierItem>()

  constructor() { }

  ngOnInit(): void {
    console.log(this.panierItem)
  }

  delete(){
    this.deleteEmitter.emit(this.panierItem);
    this.toggleConfirmation();
  }

  toggleConfirmation(){
    this.deleteConfirmation = !this.deleteConfirmation;
  }

}