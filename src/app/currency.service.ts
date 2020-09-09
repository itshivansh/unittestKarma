import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class CurrencyService {
  constructor(private httpClient: HttpClient) { }


  // function to return latest currency rates
  getCurrencyList(): Observable<any> {
    return this.httpClient.get(environment.API_URL);
  }

  // function to return exchange rate of a base currency to specific currency
  getSpecificExchangeRate(from: string, to: string): Observable<any> {
    return this.httpClient.get(environment.API_URL + '?base=' + from + '&symbols=' + to);
  }

  // function to return all exchnage rates for a specific base currency
  getAllExchangeRate(from: string): Observable<any> {
    return this.httpClient.get(environment.API_URL + '?base=' + from);
  }

}
