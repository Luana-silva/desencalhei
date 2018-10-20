import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import { HttpClient } from '@angular/common/http'

import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Constants } from '../../utils/constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any
  constructor(private http: HttpClient) { }
    
  login(email: string, password: string): Observable<any> {
        return this.http.post(`${Constants.SERVICE_URL}${Constants.SERVICE_PROJECT}user/login`, {email: email, password: password})
                           .do(user => this.user = user['data'])
  }

  isLoggedIn(): boolean {
    if(this.user) {
      return true;
    }
		return false;
  } 

  isUser() {
    return this.user;
  }

  forgotPassword(email: string) {
    return this.http.get(`${Constants.SERVICE_URL}${Constants.SERVICE_PROJECT}userBackoffice/forgotPassword/${email}`)
       .map(response => response)
  }
}
