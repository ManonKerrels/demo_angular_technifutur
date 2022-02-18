import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exo-form',
  templateUrl: './exo-form.component.html',
  styleUrls: ['./exo-form.component.css']
})
export class ExoFormComponent implements OnInit {

  nom: string = "";
  prix: number = 0;


  form = new FormGroup({
    'nom': new FormControl(),
    'prix': new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("produit :" + (this.form.value.nom) +" | prix : " + (this.form.value.prix) )
  }

}
