import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {UserModel} from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  baseUrl:string;
  user:UserModel;
  loginSuccess:boolean;
  constructor(private http:HttpClient) { 
    this.baseUrl=`${environment.baseMwUrl}/users`;
  }

  loginUser(user:UserModel):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.baseUrl}/${user.userName}/${user.password}`);
  }
}
