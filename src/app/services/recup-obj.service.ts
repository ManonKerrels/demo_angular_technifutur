import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecupObjService {

  private objectif: string = "";

  constructor() { }
  
  public getObjectif(){
    return this.objectif;
  }

  public changeObjectif(newObjectif: string){
    this.objectif = newObjectif;
  }
}
