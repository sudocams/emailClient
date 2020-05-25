import { catchError } from 'rxjs/operators';
import { EmailService } from './email.service';
import { Email } from './email';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router}  from '@angular/router';
import { EMPTY } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<Email>{

  constructor(private emailService: EmailService, private route:Router) { }

  resolve(route: ActivatedRouteSnapshot){
   const {id} = route.params;

   return this.emailService.getoneEmail(id).pipe(
     catchError( ()=>{
       this.route.navigateByUrl('/inbox/notFound');
       return EMPTY;
     })
   )
  }
}
