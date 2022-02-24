import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-insert-produit-form',
  templateUrl: './insert-produit-form.component.html',
  styleUrls: ['./insert-produit-form.component.css']
})
export class InsertProduitFormComponent implements OnInit {

  @Output('produit-submitted')
  produitSubmitted = new EventEmitter<Produit>()

  produitInsertForm = new FormGroup({
    'marque': new FormControl(),
    'modele': new FormControl(),
    'prix': new FormControl(),
    'stock': new FormControl(),
    'en_vente': new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.produitSubmitted.emit(this.produitInsertForm.value);
  }

}
