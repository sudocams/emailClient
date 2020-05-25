import { Validator, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({providedIn : 'root' })
export class PasswordMatch  implements Validator {
    validate(formcontrol: FormGroup) {
        const {password, passwordConfirmation} = formcontrol.value;
        if (password === passwordConfirmation) {
            return null;
        } else {
            return { passwordsDontMatch: true };
        }
    }
}
