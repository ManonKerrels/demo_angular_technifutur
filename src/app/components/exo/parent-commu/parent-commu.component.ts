import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-commu',
  templateUrl: './parent-commu.component.html',
  styleUrls: ['./parent-commu.component.css']
})
export class ParentCommuComponent implements OnInit {

  redAbove = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClickedSquare(){
    this.redAbove = !this.redAbove;
  }

}
