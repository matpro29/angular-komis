import {Component, OnInit} from '@angular/core';
import {CarService} from '../../../service/car/car.service';

@Component({
  selector: 'app-component-car-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {
  cars: Array<any>;

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.carService.getMy().subscribe(cars => {
      this.cars = cars;
    });
  }
}
