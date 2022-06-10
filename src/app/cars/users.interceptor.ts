import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {CarsService} from "./car-servisec/cars.service";

@Injectable()
export class UsersInterceptor implements HttpInterceptor {

  constructor(private carsService: CarsService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const isAutentification = this.carsService.isAutorization()
    if (isAutentification){
      request = this.addToken(request,this.carsService.getToken())
    }
    return next.handle(request);
  }

  addToken(request:HttpRequest<any>,token: string): HttpRequest<any>{
    return request.clone({
      setHeaders:{Authorization:`Bearer ${token}`}
    })
  }
}
