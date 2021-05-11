import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from '../Model/Country';

@Injectable({
  providedIn: 'root',
})
export class ContryInformationService {
  constructor(private http: HttpClient) {}

  EuropeCountriesList(): Observable<Country[]> {
    return this.http.get<Country[]>(
      `https://restcountries.eu/rest/v2/region/europe`
    );
  }
  AsiaCountriesList(): Observable<Country[]> {
    return this.http.get<Country[]>(
      `https://restcountries.eu/rest/v2/region/asia `
    );
  }
}
