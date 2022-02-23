import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp2',
  templateUrl: './tp2.component.html',
  styleUrls: ['./tp2.component.css']
})
export class Tp2Component implements OnInit {

  tabColor = [
    "Green",
    "Blue",
    "Red",
    "Purple",
    "Yellow",
    "Brown",
    "Pink"
  ]

  color1: string = "White";
  color2: string = "White";
  color3: string = "White";
  color4: string = "White";

  compteur: number = 0;
  playerWin: boolean = false;
  wrongPlace: boolean = false;
  endGame: boolean = false;
  inGame: boolean = false;

  soluce1: string = "Pink";
  soluce2: string = "Green";
  soluce3: string = "Yellow";
  soluce4: string = "Green";

  valide: boolean = false;
  unvalid: boolean = false;


  oubli: string = "White";

  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    if(this.color1 != "White" || this.color2 != "White" || this.color3 != "White" || this.color4 != "White") {
      this.color1 = "White";
      this.color2 = "White";
      this.color3 = "White";
      this.color4 = "White";
    }
    if((10 - this.compteur) != 0){
      this.compteur = 0;
    }
    
  }

  valid(){
    if(this.compteur < 10){
      this.valide = true;
      this.inGame = true;

      if((this.color1 == this.soluce1) && (this.color2 == this.soluce2) && (this.color3 == this.soluce3) && (this.color4 == this.soluce4)){
        this.playerWin = true;
      } else if ((this.color1 == this.oubli) || (this.color2 == this.oubli) || (this.color3 == this.oubli) || (this.color4 == this.oubli)){
        alert("Vous avez oublié de remplir une ou plusieurs cases !");
      } else {
        this.unvalid = true;
        this.compteur ++;
        this.wrongPlace = true;
      }

    } else {
      this.inGame = false;
      this.wrongPlace = false;
      this.endGame = true;
    }
  }

  touched(){
    this.wrongPlace = false;
    this.endGame = false;
    this.playerWin = false;
    this.valide = false;
    this.unvalid = false;
  }

  newGame(){
    if((10 - this.compteur) != 0){
      this.compteur = 0;
    }
  }

}
