import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enfant1-commu',
  templateUrl: './enfant1-commu.component.html',
  styleUrls: ['./enfant1-commu.component.css']
})
export class Enfant1CommuComponent implements OnInit {

  @Output('clicked-square')
  emitter = new EventEmitter();

  @Input()
  isRedAbove: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  clickedSquare(){
    this.emitter.emit();
  }

}
