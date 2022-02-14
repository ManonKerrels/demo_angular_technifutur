import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {

  date = new Date();

  heure: number = 0;
  minute: number = 0;
  seconde: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  play(){
    console.log(this.date);

  }

  pause(){

  }

  reset(){
    if((this.heure != 0) || (this.minute != 0) || (this.seconde != 0) ){
      this.heure = 0;
      this.minute = 0;
      this.seconde = 0;
    }
  }

  format(){

    
  }

}
