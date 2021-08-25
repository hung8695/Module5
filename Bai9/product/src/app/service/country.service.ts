import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from '../country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient: HttpClient) { }
  getAllCountry(): Observable<Country []> {
    return this.httpClient.get<Country []>('http://localhost:8080/countries');
  }
}
