import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinancialService {


  constructor() {
  }

  futureValue(e, f, g) {
    const term = f * 12;
    const rate = (g / 100) / 12;
    const x = Math.pow(1 + rate, term);
    console.log(1 - x);
    return e * x;
  }

  payment(e, f, g) {
    const term = f * 12;
    const rate = (g / 100) / 12;
    const x = Math.pow(1 + rate, -term);
    console.log(1 - x);
    return (rate * e) / (1 - x);
  }
}
