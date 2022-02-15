import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-directive',
  templateUrl: './demo-directive.component.html',
  styleUrls: ['./demo-directive.component.css']
})
export class DemoDirectiveComponent implements OnInit {

  color: string = 'black';
  bgColor: string = 'red';

  numberInput: number = 0;

  displayed: boolean = false;

  tabFruit = [
    "pomme",
    "banane",
    "cerise"
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.displayed = !this.displayed;
  }

}
