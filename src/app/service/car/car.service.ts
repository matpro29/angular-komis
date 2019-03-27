import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserService} from '../user/user.service';
import {User} from '../../model/model.user';

@Injectable({
  providedIn: 'root'
})

export class CarService {
  public API = '//localhost:8080';
  public CAR_API = this.API + '/cars';

  constructor(private http: HttpClient ) { }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/car');
  }

  get(id: string) {
    return this.http.get(this.CAR_API + '/' + id);
  }

  getInfo(id: string) {
    return this.http.post(this.API + '/car/info', id);
  }

  getMy(): Observable<any> {
    const USER_ID = sessionStorage.getItem('user_id');
    return this.http.post(this.API + '/car/my', USER_ID);
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    if (car['href']) {
      result = this.http.put(car.href, car);
    } else {
      car.username = sessionStorage.getItem('username');
      result = this.http.post(this.API + '/car/add', car);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
