import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono',
  templateUrl: './chrono.component.html',
  styleUrls: ['./chrono.component.css']
})
export class ChronoComponent implements OnInit {

  
  minute: number = 0;
  seconde: number = 0;
  chronoFormat: string = (this.minute +' : '+ this.seconde);
  freeze = setInterval(() => (this.chronoFormat));
  

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
      this.chronoFormat = this.chronoFormat === (this.minute +' : '+ this.seconde) ? (this.minute + 'm ' + this.seconde + 's') : (this.minute +' : '+ this.seconde);
      if(this.chronoFormat == (this.minute + 'm ' + this.seconde + 's') ){
        this.chronoFormat = (this.minute + ' minutes ' + this.seconde + ' secondes')
      }
      // this.chronoFormat = this.chronoFormat === (this.minute + ' minutes ' + this.seconde + ' secondes') ? (this.minute + 'm ' + this.seconde + 's') : (this.minute + ' minutes ' + this.seconde + ' secondes');
  }

}
