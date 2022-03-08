import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export const PRODUIT_INSERT_FORM = {
    'marque': ['Ma marque', [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    'modele': ['Mon modèle',  [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
    'prix': [0, [Validators.required, Validators.min(0)]],
    'stock': [1, [Validators.min(0), Validators.max(99), pair]],
    'en_vente': [true]
};

function pair(control: AbstractControl) : ValidationErrors | null {
    if( !control.value || control.value % 2 == 0){
        return null;
    } else {
        return {
            pair: {
                message: 'devrait être pair'
            }
            
        }
    }
}

export function priceDoubleStock(control: AbstractControl) : ValidationErrors | null {
    const prix = control.value.prix;
    const stock = control.value.stock;

    if(prix >= 2*stock){
        return null;
    } else {
        return {
            priceDoubleStock: {
            prix: prix,
            stock: stock,
            message: 'Le prix devrait être le double du stock'
            }
        }
        
    }

};