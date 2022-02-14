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
  lastNomValide ?: string;

  constructor() {}

  ngOnInit(): void {
  }

  onClick(){

    let min = 4;
    let max = 10;
    let regex = "^[a-zA-Z]{"+min+","+max+"}$";

      if(this.nom.length >= 4 && this.nom.length <= 10 && this.nom.match(regex)){
      console.log("Nom validé !");
      this.nbrValide ++;
      this.lastNomValide = this.nom;
      } else{
        console.log("Nom invalide: veuillez encoder le nombre valide de lettres !");
      }
    
    this.tentValidation ++;
  }

  clear(){
    if(this.tentValidation != 0 || this.nbrValide != 0){
      this.nom = "";
      this.lastNomValide = "";
      this.tentValidation = 0;
      this.nbrValide = 0;
    }
  }

}
