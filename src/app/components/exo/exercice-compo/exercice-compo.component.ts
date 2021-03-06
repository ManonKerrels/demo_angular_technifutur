import { Component, OnInit } from '@angular/core';
import { ColorChangeService } from 'src/app/services/color-change.service';
import { RecupObjService } from 'src/app/services/recup-obj.service';

@Component({
  selector: 'app-exercice-compo',
  templateUrl: './exercice-compo.component.html',
  styleUrls: ['./exercice-compo.component.css']
})
export class ExerciceCompoComponent implements OnInit {

  color: string = "";
  recupColor: string = "";
  recupObjGroup: string = "";
  recupObjBool: boolean = false;

  nom: string = "";
  nbrValide: number = 0;
  tentValidation: number = 0;
  lastNomValide ?: string;

  constructor(private service: RecupObjService, private servColor: ColorChangeService) {
    this.recupColor = this.servColor.getColor();
    service.obsObjectif.subscribe(info => this.recupObjGroup = info);
   }

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

  getResponse(){
    this.recupObjGroup = this.service.getObjectif();
    this.recupObjBool = true;
  }

  swap(){
    // let c = this.servColor.getColor() == 'red' ? 'blue' : 'red';
    this.servColor.changeColor(this.color);
  }

}
