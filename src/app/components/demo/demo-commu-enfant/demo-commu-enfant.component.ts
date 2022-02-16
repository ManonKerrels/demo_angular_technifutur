import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-commu-enfant',
  templateUrl: './demo-commu-enfant.component.html',
  styleUrls: ['./demo-commu-enfant.component.css']
})
export class DemoCommuEnfantComponent implements OnInit {

  infoRecup: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
