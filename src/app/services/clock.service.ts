import {Injectable} from '@angular/core';
import {interval, Observable} from 'rxjs';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() {
  }

  clock() {
    return interval(1000).pipe(map(() => new Date()));
  }

}
