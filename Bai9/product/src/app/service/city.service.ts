import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {City} from '../city';

const API_URL = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<City []> {
    return this.httpClient.get<City []>(API_URL + '/cities');
  }
  save(city): Observable<City> {
    return this.httpClient.post<City>(API_URL + '/cities' , city);
  }
  findById(id: number): Observable<City> {
    return this.httpClient.get<City>(`${API_URL}/cities/${id}`);
  }
  update(id: number, city: City): Observable<City> {
    return this.httpClient.put<City> (`${API_URL}/cities/${id}`, city);
  }
  delete(id: number): Observable<City> {
    return this.httpClient.delete<City>(`${API_URL}/cities/${id}`);
  }
  findByContainName(name: string): Observable<City []> {
    return this.httpClient.get<City[]>(`${API_URL}/cities/search?name=` + name);
  }
}
