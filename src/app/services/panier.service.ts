import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { PanierItem } from '../models/panier-item.model';
import { Plat } from '../models/plat.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private list: PanierItem[] = [];

  private panierChanged = new BehaviorSubject<PanierItem[]>(this.list.slice());
  // private panierChanged = new Subject<PanierItem[]>();

  constructor() { }

  addToCart(plat: Plat){

    let obs : Observable<string> = of('ok');

    const item = this.list
      .find(value => value.plat.nom == plat.nom);

    if(item)
      item.qtt++
    else
      this.list.push({
        plat: plat,
        qtt: 1
      });

    this.triggerPanierChanged();

  }

  removeFromCart(plat: Plat, qtt?: number){

    const item = this.list.find(value => value.plat.nom === plat.nom);

    if(item && !qtt){
      const index = this.list.indexOf(item);
      this.list.splice(index,1);

      this.triggerPanierChanged();
    }
    else if (item && qtt) {
      item.qtt -= qtt;
      if(item.qtt <= 0){
        const index = this.list.indexOf(item);
        this.list.splice(index,1);
      }

      this.triggerPanierChanged()
    }
  }

  getPanier(): PanierItem[]{
    return this.list.slice();
    // return [...this.list];
  }

  triggerPanierChanged(){
    this.panierChanged.next(this.getPanier())
  }

  getPanierChanged(): Observable<PanierItem[]>{
    return this.panierChanged;
  }

}