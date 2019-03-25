import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../service/car/car.service';

@Component({
  selector: 'app-component-car-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  cars: Array<any>;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getAll().subscribe(cars => {
      this.cars = cars;
    });
  }
}
