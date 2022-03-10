import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plat } from '../models/plat.model';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  private readonly BASE_URL = "http://localhost:3000/plats";

  constructor(private client: HttpClient) { }

  getPlats(){
    return this.client.get<Plat[]>(this.BASE_URL);
  }

  onAdd(plat: Plat){
    return this.client.post<Plat>(this.BASE_URL, plat);
  }

}
