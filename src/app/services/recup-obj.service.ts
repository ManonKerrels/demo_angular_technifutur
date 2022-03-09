import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecupObjService {

  //Observable:
  // -> objet qui envoie des informations au cours du temps, et sur lesquelles on peut réagir

  obsObjectif = new Subject<string>();

  private objectif: string = "";

  constructor() { }
  
  public getObjectif(){
    return this.objectif;
  }

  public changeObjectif(newObjectif: string){
    alert("Pseudo enregistré !")
    this.objectif = newObjectif;
    this.obsObjectif.next(this.objectif);
  }
}
