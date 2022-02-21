import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tp2',
  templateUrl: './tp2.component.html',
  styleUrls: ['./tp2.component.css']
})
export class Tp2Component implements OnInit {

  color1: string = "white";
  color2: string = "white";
  color3: string = "white";
  color4: string = "white";

  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    if(this.color1 != "white" || this.color2 != "white" || this.color3 != "white" || this.color4 != "white")
    this.color1 = "white";
    this.color2 = "white";
    this.color3 = "white";
    this.color4 = "white";
  }

}
