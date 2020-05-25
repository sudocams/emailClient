import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {take, skipWhile, tap} from 'rxjs/operators';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authservice:AuthService, private router:Router){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      return this.authservice.signin$.pipe(
        skipWhile(value => value === null),
        take(1),
        tap((authenticated)=>{
          if(!authenticated){
            this.router.navigateByUrl('/')
          }
        })
      );

    // return new Observable((subscriber)=>{ 
    //   subscriber.next(true); 
    //   subscriber.complete();;
  }
}
