import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';
import { priceDoubleStock, PRODUIT_INSERT_FORM } from 'src/app/components/Forms/produit.form';

@Component({
  selector: 'app-insert-produit-form',
  templateUrl: './insert-produit-form.component.html',
  styleUrls: ['./insert-produit-form.component.css']
})
export class InsertProduitFormComponent implements OnInit {

  @Output('produit-submitted')
  produitSubmitted = new EventEmitter<Produit>()

  produitInsertForm : FormGroup;
  // ({
  //   'marque': new FormControl(),
  //   'modele': new FormControl(),
  //   'prix': new FormControl(),
  //   'stock': new FormControl(),
  //   'en_vente': new FormControl()
  // });

  constructor(builder: FormBuilder) {
    this.produitInsertForm = builder.group(PRODUIT_INSERT_FORM, {
      validators: priceDoubleStock
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.produitInsertForm.valid){
      this.produitSubmitted.emit({
        'marque': this.produitInsertForm.value.marque,
        'modele': this.produitInsertForm.value.modele,
        'prix': this.produitInsertForm.value.prix,
        'stock': isNaN(this.produitInsertForm.value.stock) ? 1 : this.produitInsertForm.value.stock,
        'en_vente': this.produitInsertForm.value.en_vente
      })
    } else {
      alert("Formulaire invalide");
    }
    
  }

}
