import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly key = "0bebdc5d87f1413cb53191721210908";
  private readonly url = "http://api.weatherapi.com/v1/current.json?"
  public data$ = new ReplaySubject<any>(1);

  constructor(private _http: HttpClient) { }

  search(city) {
    return this._http.get(`${this.url}key=${this.key}&q=${city}&aqi=no`);
  }

  setData(data) {
    this.data$.next(data)
  }
}
