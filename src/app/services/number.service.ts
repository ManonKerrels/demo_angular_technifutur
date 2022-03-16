import { Injectable } from '@angular/core';
import { Exo4Component } from '../components/exo/exo4/exo4.component';

@Injectable({
  providedIn: 'root'
})
export class NumberService {

  private _isPair: boolean = false;

  constructor() { }

  public get isPair(){
    return this._isPair;
  }
}
