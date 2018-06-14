import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method === 'GET') {
      const customReq = req.clone({
        headers: req.headers
          .set('Cache-control', 'no-cache')
          .set('Pragma', 'no-cache')
      });
      return next.handle(customReq);
    }
    return next.handle(req);
  }
}
