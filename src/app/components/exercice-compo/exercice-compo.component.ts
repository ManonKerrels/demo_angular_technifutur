import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice-compo',
  templateUrl: './exercice-compo.component.html',
  styleUrls: ['./exercice-compo.component.css']
})
export class ExerciceCompoComponent implements OnInit {

  nom: string = "";
  nbrValide: number = 0;
  tentValidation: number = 0;
  lastNomValide: string = "";

  constructor() {}

  ngOnInit(): void {
  }

  onClick(){

    if(this.nom === 'string') {
      if(this.nom.length >= 4 && this.nom.length <= 10){
      console.log("Nom validé !");
      this. nbrValide = this.nbrValide +1;
      this.lastNomValide = this.nom;
      } else{
        console.log("Nom invalide");
      }
    } else {
      console.log("Veuillez encoder des lettres !")
    }
    
    this.tentValidation = this.tentValidation + 1;
  }

  clear(){

  }

}
