import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChildText]'
})
export class ChildTextDirective implements OnInit{

  @Input('appChildText')
  texte: string = "";

  constructor(private element:ElementRef) { }

  //la méthode se passe automatiquement après que tout se soit produit/construit
  ngOnInit(): void {
    let lambda = document.createElement('p'); //création d'une variable enfant à laquelle on donne une balise (en type chaîne de caractère)
    lambda.innerText = this.texte ? this.texte : ''; //on rajoute du texte à cet enfant, on lui donne une valeur (ce n'est pas une fonction)
    this.element.nativeElement.appendChild(lambda); //on va récupérer le parent (créé dans le constructeur), et on lui ajoute un enfant

    // this.element.nativeElement.innerHTML = "<p>" + this.texte + "</p>"; //autre moyen d'y arriver

  }

}
