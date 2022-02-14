import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo-binding',
  templateUrl: './demo-binding.component.html',
  styleUrls: ['./demo-binding.component.css']
})
export class DemoBindingComponent implements OnInit {


  nomUser: string = "Manon";
  color: string = "red";
  // private _router: Router;

  constructor( private _router: Router ) { //on met un scope devant le paramètre, donc cela devient automatiquement une variable de classe
    // this._router = router;
  }

  ngOnInit(): void {
  }

  onClick(param: any){
    console.log(param);
    param.target.style.backgroundColor = 'green';
  }

  swapColor(){
    this.color = this.color === 'blue' ? 'red' : 'blue';
  }

  alertThenRedirect(){
    alert('Vous allez être redirigé(e)');
    this._router.navigateByUrl('/exo');
    // this._router.navigate(['produit', 1+1, 'details']); //avec cette méthode; il faut faire un lien via un tableau qui va être concaténé

  }

}
