import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerwisService {
  url = 'https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/refs/heads/master/PeriodicTableJSON.json';
  public tm = [];
  private _bs = new BehaviorSubject<[]>([]);
  constructor() {
    fetch(this.url)
        .then(e=>e.json())
        .then(dane=>{
            this.tm = dane.elements;
            console.log(dane);
            this._bs.next(dane.elements);
        })
   }
   public sub() {
    return this._bs.asObservable();
   }
}
