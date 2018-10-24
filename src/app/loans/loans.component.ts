import {Component, OnInit} from '@angular/core';
import {FinancialService} from '../services/financial.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  public hv: number;
  annualAppriciation;
  term: number;
  public futureHomeValue;
  public pv: number;
  public n: number;
  public i: number;
  public fv :number;
  public pmt :number;
 
  constructor(private _finCalc: FinancialService) {
  }

  ngOnInit() {
  }

  calculate(principalValue, period, interestRate) {   
    this.pv = principalValue.value;
    this.n = period.value;
    this.i = interestRate.value;

    this.fv = this._finCalc.futureValue(this.pv, this.n, this.i);
    this.pmt = this._finCalc.payment(this.pv, this.n, this.i);
     }

     futureHomeValueCalculate(homeValue, appreciation, period){
      this.hv = homeValue.value;
      this.annualAppriciation = appreciation.value;
      this.term = period.value;

      this.futureHomeValue = this._finCalc.futureHomeValue(this.hv, this.annualAppriciation, this.term);
     }

}

interface FinancialServiceI {
  annualAppriciation: number;
}
