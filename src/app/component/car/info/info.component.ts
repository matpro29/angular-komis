import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CarService} from '../../../service/car/car.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-component-car-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  car: any = {};
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private carService: CarService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.carService.get(id).subscribe((car: any) => {
          if (car) {
            this.car = car;
            this.car.href = car._links.self.href;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
            this.goToList();
          }
        });
      }
    });
  }

  goToList() {
    this.router.navigate(['/car']);
  }
}
