import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.css']
})
export class DemoBindingComponent implements OnInit {


  nomUser: string = "Manon";
  color: string = "red";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(param: any){
    console.log(param);
    param.target.style.backgroundColor = 'green';
  }

  swapColor(){
    this.color = this.color === 'blue' ? 'red' : 'blue';
  }

}
