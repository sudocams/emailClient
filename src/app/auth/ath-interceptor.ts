import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpEventType} from '@angular/common/http';
import { Observable } from "rxjs";
//import { tap , filter} from 'rxjs/operators';

@Injectable()
export class AthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //modify or log the outgoing rquest
        const modifiedReq = req.clone({
            withCredentials: true
        } );
        return next.handle(modifiedReq).pipe(
            //watching for events in a request sen to the server
            // filter(val => val.type=== HttpEventType.Sent),

            // tap(val=>{
            //     if(val.type === HttpEventType.Sent){
            //         console.log("request was sent to server");
            //     }
            // })
        );
    }
}
