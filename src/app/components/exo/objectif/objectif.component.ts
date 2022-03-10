import { Component, OnInit } from '@angular/core';
import { ColorChangeService } from 'src/app/services/color-change.service';
import { RecupObjService } from 'src/app/services/recup-obj.service';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements OnInit {

  recupColor: string = "";
  response: string = "";
  color: string = "";

  constructor(private service: RecupObjService, private servColor: ColorChangeService) {
    this.recupColor = this.servColor.getColor();
    servColor.colorChange.subscribe(info => this.recupColor = info);
  }

  ngOnInit(): void {
  }

  onClick(){
    this.service.changeObjectif(this.response);
  }

  swap(){
    // let c = this.servColor.getColor() == 'red' ? 'blue' : 'red';
    this.servColor.changeColor(this.color);
  }

}
