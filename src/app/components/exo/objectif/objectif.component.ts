import { Component, OnInit } from '@angular/core';
import { RecupObjService } from 'src/app/services/recup-obj.service';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements OnInit {

  response: string = "";

  constructor(private service: RecupObjService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.service.changeObjectif(this.response);
  }

}
