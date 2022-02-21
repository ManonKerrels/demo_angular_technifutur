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

  soluce1: string = "Green";
  soluce2: string = "Green";
  soluce3: string = "Green";
  soluce4: string = "Green";

  oubli: string = "White";

  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    if(this.color1 != "White" || this.color2 != "White" || this.color3 != "White" || this.color4 != "White")
    this.color1 = "White";
    this.color2 = "White";
    this.color3 = "White";
    this.color4 = "White";
  }

  valid(soluce1: string, soluce2: string, soluce3: string, soluce4: string){
    soluce1 = "Green";
    soluce2 = "Green";
    soluce3  = "Green";
    soluce4 = "Green";

    if((this.color1 == this.soluce1) && (this.color2 == this.soluce2) && (this.color3 == this.soluce3) && (this.color4 == this.soluce4)){
        alert("Solution");
      } else if ((this.color1 == this.oubli) || (this.color2 == this.oubli) || (this.color3 == this.oubli) || (this.color4 == this.oubli)){
        alert("Oubli");
      } else {
        alert("Pas la solution");
      }
  }

}
