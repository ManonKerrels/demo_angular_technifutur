import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-obs-demo',
  templateUrl: './obs-demo.component.html',
  styleUrls: ['./obs-demo.component.css']
})
export class ObsDemoComponent implements OnInit {

  toNext: number = 0;

  $hotObs: Subject<number> = new BehaviorSubject<number>(this.toNext);

  $coldObs: Observable<number> = new Observable(obs => {
    obs.next(1);
    obs.next(2);
    obs.next(3);
    // obs.error('BIP BIP, erreur');
    obs.complete();
    obs.next(4);
    obs.next(5);
  });

  constructor() { }

  ngOnInit(): void {
  }

  subToColdObs(){
    this.$coldObs.subscribe({
      next: console.log,
      error: console.error,
      // error: (err) => console.log(err), -> idem ligne du dessus
      complete: () => console.log("-- COMPLETED --")
    });
  }

  subToHotObs(){
    this.$hotObs.subscribe(console.log);
  }

  nextNumber(){
    this.$hotObs.next( this.toNext );
  }

}
