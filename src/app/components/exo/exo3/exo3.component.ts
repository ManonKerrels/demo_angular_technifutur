import { Component, OnInit } from '@angular/core';
import { Tache } from 'src/app/models/tache.model';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.css']
})
export class Exo3Component implements OnInit {

  listTache: Tache [] = [
    {
      nom: 'Tâche 1',
      date: new Date
    },
    {
      nom: 'Tâche 2',
      date: new Date
    },
    {
      nom: 'Tâche 3',
      date: new Date
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onFirst(toInsert: Tache){
    this.listTache.push(toInsert);
  }

  onLast(toInsert: Tache){
    this.listTache.unshift(toInsert);
  }

}
