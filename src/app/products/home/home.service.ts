import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { SERVICE_URL } from '../../utils/constants'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: Http) { }

  bannersteste(): Observable<any> {
    // http://192.168.123.10:8080/DesencalheiWs/rs/banner/bannerImage/a8e68da2-304e-44ac-8e44-efcdd4f2c8a1/DESKTOP
    return this.http.get(`${SERVICE_URL}/DesencalheiWs/rs/banner/listAll`)
      .map(response => response.json())
      .map(response => response.data)
  }

  banners(type): Observable<any> {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json')

    return this.http.post(`${SERVICE_URL}/DesencalheiWs/rs/banner/search`, type,
      new RequestOptions({headers: headers}))
      .map(response => response.json())
      .map(response => response.data)
  }

  listProducts(): Observable<any> {
    return this.http.get('http://localhost:3000/products')
      .map(response => response.json())
  }

}
