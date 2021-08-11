import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  data: any;
  constructor(private _weather: WeatherService) { }

  ngOnInit(): void {
    this.setLondon()
    this.data = this._weather.data$.subscribe(data => {
      this.data = data;
    })
  }

  setLondon() {
    this._weather.search("London").pipe(take(1)).subscribe((data) => {
      this._weather.setData(data);
    })
  }

}
