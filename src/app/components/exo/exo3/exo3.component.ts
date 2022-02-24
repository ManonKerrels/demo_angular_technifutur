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
      id: 1
    },
    {
      nom: 'Tâche 2',
      id: 2
    },
    {
      nom: 'Tâche 3',
      id: 3
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
