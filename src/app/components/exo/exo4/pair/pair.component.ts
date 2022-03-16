import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pair',
  templateUrl: './pair.component.html',
  styleUrls: ['./pair.component.css']
})
export class PairComponent implements OnInit {

  number!: number;

  constructor(private router: ActivatedRoute) {
    this.number = router.snapshot.params["toto"];
   }

  ngOnInit(): void {
  }

}
