import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private service: PanierService, private platService: PlatService) {
    this.getPlats();
   }

  ngOnInit(): void {
  }

  toggleAdding(){
    this.adding = !this.adding;
  }

  getPlats(){
    this.platService.getPlats().subscribe({
      next: plats => this.menu = plats,
      error: err => alert('échec'),
      complete: () => console.log("get plats - completed")
    });
  }

  onPlatSent(plat: Plat){
    this.platService.onAdd(plat).subscribe(() => this.getPlats());
  }

  onAdd(plat: Plat){
    this.service.addToCart(plat);
  }

}