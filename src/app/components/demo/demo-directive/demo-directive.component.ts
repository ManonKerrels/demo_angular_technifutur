import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {

  @Input('appChildText')
  texte: string = "Salut";

  color: string = 'black';
  bgColor: string = 'red';

  nbrEnfant: number = 0;

  numberInput: number = 0;

  displayed: boolean = false;

  tabFruit = [
    "pomme",
    "banane",
    "cerise"
  ]

  constructor(private element: ElementRef) { }

  ngOnInit(): void {

  }

  toggleDisplay(){
    this.displayed = !this.displayed;
  }

  onColorSwapped(color: string){
    // console.log(color);
  }

  countChildren(){
    this.nbrEnfant ++;
  }

}
