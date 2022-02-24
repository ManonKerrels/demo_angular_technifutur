import { Component, Input, OnInit } from '@angular/core';
import { Tache } from 'src/app/models/tache.model';

@Component({
  selector: 'app-enfant-item',
  templateUrl: './enfant-item.component.html',
  styleUrls: ['./enfant-item.component.css']
})
export class EnfantItemComponent implements OnInit {

  @Input('item')
  listTache!: Tache[];

  constructor() { }

  ngOnInit(): void {
  }

}
