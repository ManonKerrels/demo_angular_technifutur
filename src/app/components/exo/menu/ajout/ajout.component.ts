import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Plat } from 'src/app/models/plat.model';
import { PanierService } from 'src/app/services/panier.service';
import { menuValidator, MENU_INSERT_FORM, modeleMarqueValidator, PRODUIT_INSERT_FORM } from '../../../Forms/produit.form';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  @Output
  ('plat-sent')
  platSent = new EventEmitter<Plat>();

  form = new FormGroup({
    'nom': new FormControl(undefined),
    'type': new FormControl(undefined),
    'prix': new FormControl([Validators.min(1), Validators.max(99)])
  })

  constructor(private service: PanierService, builder: FormBuilder) {
    this.form = builder.group(MENU_INSERT_FORM);
   };

  ngOnInit(): void {
  }

  addToCart(plat: Plat){
    this.service.addToCart(plat);
  }

  onSubmit(){
    if( this.form.valid )
      this.platSent.emit(this.form.value);
  }

}
