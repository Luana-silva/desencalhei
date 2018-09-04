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

export class LoginService {

	user: any

	constructor(private http:HttpClient) {}

	isLoggedIn(): boolean {
		return this.user !== undefined 
	}
	
	login(email: string, password: string): Observable<any> {
		return this.http.post('http://192.168.123.10:8080/DesencalheiWs/rs/user/login', 
			{email: email, password: password})
		   .do(user => this.user = user)
	}
}