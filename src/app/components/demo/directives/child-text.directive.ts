import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appChildText]'
})
export class ChildTextDirective implements OnInit{


  @Input('appChildText')
  texte: string = "";

  @Output('increase-child')
  emitter = new EventEmitter<string>()


  constructor(private element:ElementRef) { }

  //la méthode se passe automatiquement après que tout se soit produit/construit
  ngOnInit(): void {
    // let lambda = document.createElement('p'); //création d'une variable enfant à laquelle on donne une balise (en type chaîne de caractère)
    // lambda.innerText = this.texte ? this.texte : ''; //on rajoute du texte à cet enfant, on lui donne une valeur (ce n'est pas une fonction)
    // this.texte = "Nouvel enfant";
    // // lambda.onclick = () => console.log("bonjour");
    // this.element.nativeElement.appendChild(lambda); //on va récupérer le parent (créé dans le constructeur), et on lui ajoute un enfant

    // this.element.nativeElement.innerHTML = "<p>" + this.texte + "</p>"; //autre moyen d'y arriver
    this.createChild();
  }

  createChild(){
    const child = document.createElement('p');

    child.innerText = this.texte ? this.texte : 'Bonjour';
    child.onclick = () => {
      this.createChild();
      this.emitter.emit();
    } 
    this.texte = "Nouvel enfant";

    this.element.nativeElement.appendChild(child);
  }

}
