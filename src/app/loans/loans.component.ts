import {Component, OnInit} from '@angular/core';
import {FinancialService} from '../services/financial.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})
export class LoansComponent implements OnInit {
  public pv;
  public n;
  public i;
  public fv;
  public pmt;

  constructor(private _finCalc: FinancialService) {
  }

  ngOnInit() {
  }

  calculate(e, f, g) {
    this.pv = e.value;
    this.n = f.value;
    this.i = g.value;
    this.fv = this._finCalc.futureValue(this.pv, this.n, this.i);
    this.pmt = this._finCalc.payment(this.pv, this.n, this.i);
  }

}
