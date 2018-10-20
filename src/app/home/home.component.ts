import { Component, OnInit } from '@angular/core';
import { Observable, of, from, interval} from 'rxjs';
import { take, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // myObserver =  of(1,2,3,4,5,6,7,8);
// contentArrY = [1,2,3,4,5,6,7,8];
// myObserver$ = from(this.contentArrY);
// myObserver$ = interval(1000).pipe(take(50));
// public info;
// mashup:Observable<any> = of('anything', ['you', 'want'], 23, true, {cool: 'stuff'});

 names:Observable<any> = of('Simon', 'Garfunkle');



  constructor() { }

  ngOnInit() {   

    // this.mashup.pipe(map(d => console.log(d))).subscribe();

    this.names.pipe(tap(d =>  console.log(d))).subscribe();

  //  this.myObserver$.subscribe(
  //     data => {
  //     this.info = data;
  //     console.log(this.info)
  //     },
  //     err => console.error(err),
  //     () => console.log('Done streaming')
  //   );

  }

}
// https://upgradetoangular.com/angular-news/rxjs-6-examples-in-angular-6-creating-observables/