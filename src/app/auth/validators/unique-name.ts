import { AuthService } from '../auth.service';
import { Injectable } from '@angular/core';
import { AsyncValidator, FormControl } from '@angular/forms';
import { map, catchError} from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable ({providedIn:'root'})
export class UniqueName implements AsyncValidator {
    constructor(private auth: AuthService){}

    validate = (control: FormControl) =>{
        const {value} = control;
        
        return this.auth.userNameAvailable(value).pipe(
            map(value => {
                if(value.available){
                    return null;
                }
            }),
            catchError(err=>{
                if(err.error.message.username){
                    return of({ nonUserName :true });
                }else{
                    return of({ noConnection :true });
                }
            })
        );   
    };
}

//this is very import as it needs the http libary thus we use dependency injection