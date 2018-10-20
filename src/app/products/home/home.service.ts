import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { HttpClient, HttpHeaders }  from '@angular/common/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Constants } from '../../utils/constants'
import { AuthService } from '../../shared/auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: Http, private authService: AuthService) { }

  banners(type): Observable<any> {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json')

    return this.http.post(`${Constants.SERVICE_URL}${Constants.SERVICE_PROJECT}banner/search`, type,
      new RequestOptions({headers: headers}))
      .map(response => response.json())
      .map(response => response.data)
  }

  getCategories(): Observable<any> {
    return this.http.get(`${Constants.SERVICE_URL}${Constants.SERVICE_PROJECT}category/listActives`)
      .map(response => response.json())
  }
  
  getHome(): Observable<any> {
    return this.http.get(`${Constants.SERVICE_URL}${Constants.SERVICE_PROJECT}home/getHome`)
      .map(response => response.json())
  }

  getPreferences(): Observable<any> {
    return this.http.get(`${Constants.SERVICE_URL}${Constants.SERVICE_PROJECT}preference/listAll`)
          .map(response => response.json());
  }

  sendTags(tags) {

    let headers = new HttpHeaders()
    //const headers = new Headers();
    if(this.authService.isLoggedIn()) {
      headers.set('Authorization', `Bearer ${this.authService.user}`)
    } 

    //return this.http.post('', tags)

    console.log('Estou enviando as tags aqui');
    console.log(this.authService.user);
  }

}
