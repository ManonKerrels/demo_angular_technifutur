import { NUMBER_TYPE } from "@angular/compiler/src/output/output_ast";
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export const PRODUIT_INSERT_FORM = {
    'marque': ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    'modele': ['',  [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
    'prix': [0, [Validators.required, Validators.min(0)]],
    'stock': [1, [Validators.min(0), Validators.max(99), pair]],
    'en_vente': [true]
};

export function pair(control: AbstractControl) : ValidationErrors | null {
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

export function twoFirstLetter(control: AbstractControl) : ValidationErrors | null {
    let marque = control.value.marque as string | undefined;
    let modele = <string>control.value.modele;

    let sub = marque?.substring(0,2)
    if( !marque || modele?.startsWith(sub ? sub : '')){
        return null;
    } else {
        return {
            twoFirstLetter: {
                modele: modele,
                marque: marque,
                // message: 'Les deux premières lettres doivent être les mêmes'
            }
        }
    }


    // if((marque.charAt(0) == modele.charAt(0)) && marque.charAt(1) == modele.charAt(1)){
    //     return null;
    // } else {
    //     return {
    //         twoFirstLetter: {
    //             marque: marque,
    //             modele: modele,
    //             message: 'Les deux premières lettres du modèle doivent être les mêmes que celles de la marque(minimum deux lettres)'
    //         }
            
    //     }
    // }
};

// export function multipleOf(de: number): ValidatorFn {
//     return function (control: AbstractControl) : ValidationErrors | null {
//         if( !control.value && control.value % de === 0){
//             return null;
//         } else {
//             return {
//                 multipleOf: {
//                     nbr: control.value,
//                     multipleOf: nbr, 
//                     message: 'La valeur devrait être un multiple de ' + ${nbr}
//                 }
                
//             }
//         }
//     }
// }
