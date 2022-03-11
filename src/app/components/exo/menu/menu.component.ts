import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from 'src/app/models/plat.model';
import { PanierService } from 'src/app/services/panier.service';
import { PlatService } from 'src/app/services/plat-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  adding: boolean = false;

  menu!: Plat[];

  constructor(private service: PanierService, private platService: PlatService, private router: Router) { 
    this.getPlats();
  }

  ngOnInit(): void {
  }

  onAdd(plat: Plat){
    this.service.addToCart(plat);
  }

  toggleAdding(){
    this.adding = !this.adding
  }

  getPlats(){
    this.platService.getPlats()
      .subscribe({
        next: plats => this.menu = plats,
        error: err => alert("echec"),
        complete: () => console.log("get plats - completed")
      });
  }

  onPlatSent(plat: Plat){
    this.platService.onPlatSent(plat)
      .subscribe(() => this.getPlats())
  }

}