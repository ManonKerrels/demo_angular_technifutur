import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChildText]'
})
export class ChildTextDirective implements OnInit{

  @Input('appChildText')
  texte: string = "salut";

  constructor(private element:ElementRef) { }

  ngOnInit(): void {
    
  }

}
