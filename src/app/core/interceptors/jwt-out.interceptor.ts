import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from "../services/user.service";

@Injectable()
export class JwtOutInterceptor implements HttpInterceptor {


  constructor(private userService : UserService) {

  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(this.userService.token) {
      const authReq = request.clone({
        headers: new HttpHeaders({
          'deviceplatform': 'Angular',
          'Authorization': 'Bearer ' + this.userService.token,
        })
      });
      return next.handle(authReq);
    }
    return next.handle(request);
  }
}
