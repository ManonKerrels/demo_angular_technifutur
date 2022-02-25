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
  oubli: string = "White";

  compteur: number = 0;

  playerWin: boolean = false;
  wrongPlace: boolean = false;
  endGame: boolean = false;
  inGame: boolean = false;

  soluce1: string = "";
  soluce2: string = "";
  soluce3: string = "";
  soluce4: string = "";

  valide: boolean = false; //commencement de jeu
  unvalid: boolean = false; //couleur non présente
  uncorrectPlace: boolean = false; //pas la bonne place

  soluce1IsPlaced: boolean = false;
  soluce2IsPlaced: boolean = false;
  soluce3IsPlaced: boolean = false;
  soluce4IsPlaced: boolean = false;


  constructor() { }

  ngOnInit(): void { }

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
    //while 10 essais
    if(this.compteur < 10) {
      this.valide = true;
      this.inGame = true;

      //en cas d'oubli
      if ((this.color1 == this.oubli) || (this.color2 == this.oubli) || (this.color3 == this.oubli) || (this.color4 == this.oubli)){
        alert("Vous avez oublié de remplir une ou plusieurs cases !");

        //en cas de réussite
      } else if((this.color1 == this.soluce1) && (this.color2 == this.soluce2) && (this.color3 == this.soluce3) && (this.color4 == this.soluce4)){
        this.inGame = false;
        this.playerWin = true;

        //si couleur1 != soluce1 mais présente ailleurs dans le jeu
      } else if (this.color1 != this.soluce1 && ((this.color1 == this.soluce2) || (this.color1 == this.soluce3) || (this.color1 == this.soluce4))) {
        if(this.color1 == this.soluce2){
          this.soluce2IsPlaced = true;
        } else if(this.color1 == this.soluce3){
          this.soluce3IsPlaced = true;
        } else if(this.color1 == this.soluce4){
          this.soluce4IsPlaced = true;
        }

        //couleur2 != soluce2 mais présente ailleurs dans le jeu
      // } else if(this.color2 != this.soluce2 && ((this.color2 == this.soluce1) || (this.color2 == this.soluce3) || (this.color2 == this.soluce4))){
      //   if(this.color2 == this.soluce1){
      //     this.soluce1IsPlaced = true;
      //   } else if(this.color2 == this.soluce3){
      //     this.soluce3IsPlaced = true;
      //   } else if(this.color2 == this.soluce4){
      //     this.soluce4IsPlaced = true;
      //   }

      }
      
      //si rien n'est correct
      else {
        this.unvalid = true;
        this.compteur ++;
        this.wrongPlace = true;
      }

    } //end 10 essais
    else {
      this.compteur++;
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
    this.uncorrectPlace = false;
  }

  newGame(){
    this.unvalid = false;
    this.playerWin = false;
    this.soluce1 = this.tabColor[Math.floor((Math.random()) * this.tabColor.length)];
    this.soluce2 = this.tabColor[Math.floor((Math.random()) * this.tabColor.length)];
    this.soluce3 = this.tabColor[Math.floor((Math.random()) * this.tabColor.length)];
    this.soluce4 = this.tabColor[Math.floor((Math.random()) * this.tabColor.length)];

    this.endGame = false;

    this.color1 = "White";
    this.color2 = "White";
    this.color3 = "White";
    this.color4 = "White";

    if((10 - this.compteur) != 0){
      this.compteur = 0;
    }
  }

}
