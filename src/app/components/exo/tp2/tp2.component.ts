import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

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

  valide: boolean = false;
  unvalid: boolean = false;
  notGoodPlace: boolean = false;

  countGreen: number = 0;
  countBlue: number = 0;
  countRed: number = 0;
  countPurple: number = 0;
  countYellow: number = 0;
  countBrown: number = 0;
  countPink: number = 0;


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
    if(this.compteur < 10){
      this.valide = true;
      this.inGame = true;

      // if((this.soluce1 = "Green") || (this.soluce2 = "Green") || (this.soluce3 = "Green") || (this.soluce4 = "Green")) {
      //   this.countGreen++;
      // } else if((this.soluce1 = "Blue") || (this.soluce2 = "Blue") || (this.soluce3 = "Blue") || (this.soluce4 = "Blue")) {
      //   this.countBlue++;
      // } else if ((this.soluce1 = "Red") || (this.soluce2 = "Red") || (this.soluce3 = "Red") || (this.soluce4 = "Red")){
      //   this.countRed++;
      // } else if((this.soluce1 = "Purple") || (this.soluce2 = "Purple") || (this.soluce3 = "Purple") || (this.soluce4 = "Purple")) {
      //   this.countPurple++;
      // } else if((this.soluce1 = "Yellow") || (this.soluce2 = "Yellow") || (this.soluce3 = "Yellow") || (this.soluce4 = "Yellow")) {
      //   this.countYellow++;
      // } else if((this.soluce1 = "Brown") || (this.soluce2 = "Brown") || (this.soluce3 = "Brown") || (this.soluce4 = "Brown")) {
      //   this.countBrown++;
      // } else if((this.soluce1 = "Pink") || (this.soluce2 = "Pink") || (this.soluce3 = "Pink") || (this.soluce4 = "Pink")) {
      //   this.countPink++;
      // }



      if((this.color1 == this.soluce1) && (this.color2 == this.soluce2) && (this.color3 == this.soluce3) && (this.color4 == this.soluce4)){
        this.inGame = false;
        this.playerWin = true;
      } else if ((this.color1 == this.oubli) || (this.color2 == this.oubli) || (this.color3 == this.oubli) || (this.color4 == this.oubli)){
        alert("Vous avez oublié de remplir une ou plusieurs cases !");
      } else {
        this.notGoodPlace = true;
        this.unvalid = true;
        this.compteur ++;
        this.wrongPlace = true;
      }

    } else {
      this.inGame = false;
      this.wrongPlace = false;
      this.endGame = true;
      this.notGoodPlace = false;
    }
  }

  touched(){
    this.wrongPlace = false;
    this.endGame = false;
    this.playerWin = false;
    this.valide = false;
    this.unvalid = false;
    this.notGoodPlace = false;
  }

  newGame(){
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
