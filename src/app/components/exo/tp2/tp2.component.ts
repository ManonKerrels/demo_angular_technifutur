import { Component, OnInit } from '@angular/core';
import { Pin } from 'src/app/models/pin.model';

@Component({
  selector: 'app-tp2',
  templateUrl: './tp2.component.html',
  styleUrls: ['./tp2.component.css']
})
export class Tp2Component implements OnInit {

  tabColor: string[] = [
    "Green",
    "Blue",
    "Red",
    "Purple",
    "Yellow",
    "Brown",
    "Pink"
  ]

  color1!: Pin;
  color2!: Pin;
  color3!: Pin;
  color4!: Pin;

  lastProp1!: Pin;
  lastProp2!: Pin;
  lastProp3!: Pin;
  lastProp4!: Pin;

  compteur: number = 0

  playerWin: boolean = false;
  wrongPlace: boolean = false;
  endGame: boolean = false;
  inGame: boolean = false;

  soluce1!: Pin;
  soluce2!: Pin;
  soluce3!: Pin;
  soluce4!: Pin;

  tabSoluce: Pin[] = [
    this.soluce1,
    this.soluce2,
    this.soluce3, 
    this.soluce4
  ];

  tabPropose: Pin[] = [
    this.lastProp1,
    this.lastProp2,
    this.lastProp3,
    this.lastProp4
  ];


  constructor() { 
    this.newGame();
  }

  ngOnInit(): void { }

  reset(){
      this.color1 = {
        color: "White",
        status: undefined
      };

      this.color2 = {
      color: "White",
      status: undefined
      };

      this.color3 = {
        color: "White",
        status: undefined
      };

      this.color4 = {
      color: "White",
      status: undefined
      };
  }

  valid(){
    //while 10 essais
    if(this.compteur < 10) {
      this.inGame = true;

      for(let i = 0; i < this.tabPropose.length; i++){
        this.tabPropose[i].status = undefined;
        this.tabSoluce[i].status = undefined;
      }

      for (let i = 0; i < this.tabPropose.length; i++) {
        if(this.tabPropose[i].color == this.tabSoluce[i].color){
          this.tabPropose[i].status = 'correct';
          this.tabSoluce[i].status = 'correct';
        } else {
          this.tabPropose[i].status = 'false';
        }
      }


      

    } //end 10 essais
    else {
      this.inGame = false;
      this.wrongPlace = false;
      this.endGame = true;
  }
}

  touched(){
    this.wrongPlace = false;
    this.endGame = false;
    this.playerWin = false;
  }

  newGame(){
    this.playerWin = false;

    this.soluce1 = {
      color: this.tabColor[Math.floor((Math.random()) * this.tabColor.length)],
      status: undefined
    }
    this.soluce2 = {
      color: this.tabColor[Math.floor((Math.random()) * this.tabColor.length)],
      status: undefined
    }
    this.soluce3 = {
      color: this.tabColor[Math.floor((Math.random()) * this.tabColor.length)],
      status: undefined
    }
    this.soluce4 = {
      color: this.tabColor[Math.floor((Math.random()) * this.tabColor.length)],
      status: undefined
    }

    this.endGame = false;
    this.reset();

    if((10 - this.compteur) != 0){
      this.compteur = 0;
    }
  }

}
