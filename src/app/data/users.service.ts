import { IUserResponse } from './../interface/user-response';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http: HttpClient) { }
  
  getList():Observable<IUserResponse>{
   return this._http.get<IUserResponse>('https://fakerapi.it/api/v1/users?_quantity=10&_gender=male')
  }
}
