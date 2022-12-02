import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {UserService} from "../services/user.service";

@Injectable()
export class JwtInInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(request.url.indexOf('/Authenticate')!==-1){
      return next.handle(request)
        .pipe(
          tap(value => {
            if(value instanceof HttpResponse && value.ok) {
              this.userService.token = (value as HttpResponse<any>).body.token;
            }
          })
        )
    }
    return next.handle(request);
  }
}
