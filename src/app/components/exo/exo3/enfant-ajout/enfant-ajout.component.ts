import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Tache } from 'src/app/models/tache.model';

@Component({
  selector: 'app-enfant-ajout',
  templateUrl: './enfant-ajout.component.html',
  styleUrls: ['./enfant-ajout.component.css']
})
export class EnfantAjoutComponent implements OnInit {

  @Output('task-go-down')
  taskGoDown = new EventEmitter<Tache>()

  @Output('task-go-up')
  taskGoUp = new EventEmitter<Tache>()

  

  tacheInsertForm = new FormGroup({
    'nom': new FormControl,
    'date': new FormControl
  });

  constructor() { }

  ngOnInit(): void {
  }


  onBegin(){
    this.taskGoUp.emit(this.tacheInsertForm.value);
  }

  onEnd(){
    this.taskGoDown.emit(this.tacheInsertForm.value);
  }

}
