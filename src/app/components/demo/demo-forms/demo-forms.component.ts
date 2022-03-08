import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo-forms',
  templateUrl: './demo-forms.component.html',
  styleUrls: ['./demo-forms.component.css']
})
export class DemoFormsComponent implements OnInit {

  form = new FormGroup({
    'nom': new FormControl(undefined),
    'age': new FormControl(undefined, [Validators.min(0), Validators.max(100)]),
    'bouffe-pref': new FormControl('Gâteau')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.form.valid){
      console.log(this.form);
    } else {
      console.error("Form invalide");
    }
    
  }

}
