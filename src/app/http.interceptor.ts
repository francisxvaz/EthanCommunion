import { Observable } from 'rxjs/Rx';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LogHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('processing request', req);
        return next.handle(req)
                   .do((ev: HttpEvent<any>) => {
                       if (ev instanceof HttpResponse){
                        console.log('processing response', ev)
                       }
                   })
                    .catch(response => {
                        if (response instanceof HttpErrorResponse) {
                            console.log('processing error response', response)
                        }
                        return Observable.throw(response);
                    });
    }
    constructor() { }
}
