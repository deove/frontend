import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Counter } from './counter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  public initialValue = [12, 6, 78];

  constructor(private httpClient: HttpClient) { }

  reset() {
    this.initialValue = [0, 0, 0];
  }


  increment(): Observable<Counter>{
    
    this.httpClient.patch("https://lp4asgadot.herokuapp.com/counters/47.json",{"value" : 1}).subscribe();

      return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/47.json");
  }

  getCounterValue(id:number): Observable<Counter>{
    return this.httpClient.get<Counter>("https://lp4asgadot.herokuapp.com/counters/47.json")
  }
}