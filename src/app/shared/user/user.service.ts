import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public API = '//localhost:8080';
  public USER_API = this.API + '/users';

  constructor(private http: HttpClient) { }

  save(user: any): Observable<any> {
    let result: Observable<Object>;
    if (user['href']) {
      result = this.http.put(user.href, user);
    } else {
      result = this.http.post(this.USER_API, user);
    }
    return result;
  }
}
