import { Component, OnInit } from '@angular/core';
import { ClockService } from '../services/clock.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
public title = 'FinCalc';
public clock;
  constructor(private _clock: ClockService) { }

  ngOnInit() {
   this.clock = this._clock.clock();
  }

}
