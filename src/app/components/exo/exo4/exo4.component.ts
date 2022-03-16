import { Component, OnInit } from '@angular/core';
import { NumberService } from 'src/app/services/number.service';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.css']
})
export class Exo4Component implements OnInit {

  number!: number;
  isPair: boolean = false;

  constructor(private service: NumberService) { }

  ngOnInit(): void {
  }

}
