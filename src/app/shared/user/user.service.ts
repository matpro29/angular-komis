import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public API = '//localhost:8080';
  public REGISTER_API = this.API + '/register';
  public LOGIN_API = this.API + '/login';

  constructor(private http: HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(this.REGISTER_API, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(this.LOGIN_API, user);
  }
}
