import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appGreenBg]'
})
export class GreenBgDirective implements OnInit{

  constructor(private element: ElementRef) { }


  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "green";
  }

}
