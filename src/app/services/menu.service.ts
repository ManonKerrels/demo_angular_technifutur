import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Produit } from '../models/produit.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuChoose = new Subject<Produit>();

  private obj!: Produit;


  constructor() { }

  public changeMenu(newObj: Produit){
    alert("Produit ajouté !");
    this.obj = newObj;
    this.menuChoose.next(this.obj);
  }

  public getMenu(){
    return this.obj;
  }
}
