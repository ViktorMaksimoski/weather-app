import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  city: string;
  data: any;
  constructor(private _weather: WeatherService) { }

  ngOnInit(): void {
  }

  search() {
    this._weather.search(this.city)
    .pipe(take(1))
    .subscribe((res) => {
      this.data = res
      this._weather.setData(res);
      console.log(res)
    })
  }

}
