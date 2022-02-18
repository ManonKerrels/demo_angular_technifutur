import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  //crée un paramètre, un nom de directive sur un attribut + association de valeur en un seul coup (>< Output = crée un événement)
  @Input('appHighlight')
  color: string = 'yellow';

  @Input('black-text')
  black: boolean = true;



  constructor(private element: ElementRef) {
    console.log(this.color);
  }
  
  ngOnInit(): void{
    this.element.nativeElement.style.backgroundColor = this.color;
    this.element.nativeElement.style.color = this.black ? 'black' : 'white';
  }

  @HostListener('click')
  onClick(){
    alert('Bonjour !');
  }

}
