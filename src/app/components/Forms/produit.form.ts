import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";


export const PRODUIT_INSERT_FORM = {
    'marque': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    'modele': [undefined,[Validators.minLength(2), Validators.maxLength(30)]],
    'prix' : [0, [Validators.required, Validators.min(0)]],
    'stock' : [1, [Validators.min(1), Validators.max(99)]],
    'en_vente' : [true]
};

export const MENU_INSERT_FORM = {
    'id': [undefined, [Validators.min(0), Validators.max(50)]],
    'nom': [undefined, [Validators.minLength(2), Validators.maxLength(30)]],
    'type': [undefined, [Validators.minLength(2), Validators.maxLength(30)]],
    'prix': [0, [Validators.min(1), Validators.max(50)]]
}

export function priceDoubleStock(control: AbstractControl) : ValidationErrors | null {
    const prix = control.value.prix;
    const stock = control.value.stock;

    if( prix >= 2*stock )
        return null;

    return {
        priceDoubleStock: {
            prix: prix,
            stock: stock,
            message: 'le prix devrait être le double du stock'
        }
    }
}

export function modeleMarqueValidator(control: AbstractControl) : ValidationErrors | null {
    const modele = control.value.modele as string | undefined;
    const marque = <string | undefined> control.value.marque;

    if( !marque || modele?.startsWith(marque.substring(0,2)) )
        return null;

    return {
        'modele-marque-error': {
            modele: modele,
            marque: marque
        }
    }
}

export function menuValidator(control: AbstractControl) : ValidationErrors | null {
    const nom = control.value.nom as string;
    const type = control.value.type as string;

    if(nom != type){
        return null;
    } else {
        return {
            menuValidator : {
                nom: nom,
                type: type,
                message: 'Le formulaire est incorrect'
            }
        }
    }
}

// function multipleOf(arg0: number) {
//     throw new Error("Function not implemented.");
// }
