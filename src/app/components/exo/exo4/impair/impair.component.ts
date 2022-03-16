import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-impair',
  templateUrl: './impair.component.html',
  styleUrls: ['./impair.component.css']
})
export class ImpairComponent implements OnInit {

  number!: number;

  constructor(private router: ActivatedRoute) {
    this.number = router.snapshot.params["dede"];
   }

  ngOnInit(): void {
  }

}
