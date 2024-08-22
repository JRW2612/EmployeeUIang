import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private apiUrl = 'https://localhost:7230/api/Cascading';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetCountries`);
  }

  getStates(countryId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetStates`, { params: { st: countryId.toString() } });
  }

  getCities(stateId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/GetCities`, { params: { ct: stateId.toString() } });
  }

}