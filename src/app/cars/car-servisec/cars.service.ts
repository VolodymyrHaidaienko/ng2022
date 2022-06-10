import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUserCar} from "../../models/IUserCar";
import {Observable} from "rxjs";
import {IToken} from "../../models/IToken";
import {ICars} from "../../models/ICars";




@Injectable({
  providedIn: 'root'
})
export class CarsService {


  private _bazeUrl = 'http://owu.linkpc.net/api/v3'
  private setTokenClient = 'access'

  private urls = {
    users: '/users',
    auth: 'http://owu.linkpc.net/api/v3/auth',
    cars: '/cars'
  }


  constructor(private httpClient: HttpClient) {
  }

  getAllCar(): Observable<ICars[]> {
    return this.httpClient.get<ICars[]>(this._bazeUrl + this.urls.cars)
  }


  registerClient(user: IUserCar): Observable<IUserCar> {
    return this.httpClient.put<IUserCar>(this._bazeUrl + this.urls.users, user);

  }

  loginClient(user: IUserCar): Observable<IToken> {
    return this.httpClient.post<IToken>(this.urls.auth, user)

  }

  isAutorization(): boolean {
    return !!localStorage.getItem(this.setTokenClient)
  }


  setToken(token: IToken): void {
    localStorage.setItem(this.setTokenClient, token.access)


  }


  getToken(): string {
    return localStorage.getItem(this.setTokenClient) as string
  }

  create(car:ICars): Observable<ICars> {

    return this.httpClient.post(this._bazeUrl+this.urls.cars,car)

  }

deleteByID(id?:number):Observable<void>{
    return this.httpClient.delete<void>(this._bazeUrl+this.urls.cars+'/'+id)
}


}
