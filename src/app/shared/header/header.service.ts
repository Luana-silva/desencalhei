import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { Constants } from '../../utils/constants'
import { Categories } from './categories.model'
    
@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: Http) { }

  getCategories():Observable<Categories> {
    return this.http.get(`${Constants.SERVICE_URL}${Constants.SERVICE_PROJECT}category/listActives`)
    .map(response => response.json())
    .map(response => response['data'])
  }
}
