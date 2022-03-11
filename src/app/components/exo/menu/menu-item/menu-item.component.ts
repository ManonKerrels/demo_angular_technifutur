import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input()
  plat!: Plat;

  @Output('add-to-panier')
  addToPanier= new EventEmitter<Plat>()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onAdd(){
    this.addToPanier.emit(this.plat);
  }

  onDetails(){
    this.router.navigate(['/plat', this.plat.id]);
    // this.router.navigateByUrl('plat/'+this.plat.id);
  }

}