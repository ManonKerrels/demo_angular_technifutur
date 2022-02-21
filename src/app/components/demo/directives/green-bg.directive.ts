import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appGreenBg]'
})
export class GreenBgDirective implements OnInit{

  //emitter = permet d'envoyer des éléments
  @Output('color-swapped')
  emitter = new EventEmitter<string>() 

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "green";
    setInterval( () => {
      const previous_bg = this.element.nativeElement.style.backgroundColor;
      const next_bg = previous_bg == 'green' ? 'lightgreen' : 'green';
      this.element.nativeElement.style.backgroundColor = next_bg;
      this.emitter.emit(next_bg);
    } , 1000)
  }

  

}
