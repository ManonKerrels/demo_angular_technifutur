import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorChangeService {

  colorChange = new Subject<string>();

  private color: string = "";

  constructor() { }

  public getColor(){
    return this.color;
  }

  public changeColor(newColor: string){
    alert("Couleur de bannière choisie !");
    this.color = newColor;
    this.colorChange.next(this.color);
  }
}
