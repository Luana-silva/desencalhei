import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
import { HttpClient } from '@angular/common/http'
 
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { SERVICE_URL } from '../../utils/constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: any
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${SERVICE_URL}/DesencalheiWs/rs/user/login`, {email: email, password: password})
           .map(response => { 

             localStorage.setItem('currentUser', JSON.stringify(response['data'])) 
             return response
            })
           .do(user => this.user = user['data'])
  }

  isLoggedIn(): boolean {
		return this.user !== undefined
  } 
     
  forgotPassword(email: string) {
    return this.http.get(`${SERVICE_URL}/DesencalheiWs/rs/userBackoffice/forgotPassword/${email}`)
       .map(response => response)
  }
}
