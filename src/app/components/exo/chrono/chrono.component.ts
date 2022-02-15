import { Component, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { Chrono } from 'src/app/models/chrono.model';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {

  
  minute: number = 0;
  seconde: number = 0;
  date: string = "";
  freeze = setInterval(() => (this.minute + this.seconde));

  constructor() { }

  ngOnInit(): void {
  }

  play(){
    this.freeze = setInterval( () => { //ok
      this.seconde++;
      if(this.seconde > 59){
        this.minute++;
        this.seconde = 0;
      }
    } ,1000);
  }

  pause(){
    if(this.freeze){
      clearInterval(this.freeze);
    }
  }

  reset(){ //ok
    if((this.minute != 0) || (this.seconde != 0) ){
      this.minute = 0;
      this.seconde = 0;
    }
  }

  format(){
    this.date = this.date === (this.minute +':'+ this.seconde) ? (this.minute + 'm' + this.seconde + 's') : (this.minute +':'+ this.seconde);
  }

}
