import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  public API = '//localhost:8080';
  public REGISTER_API = this.API + '/register';

  constructor(private http: HttpClient) { }

  save(user: any): Observable<any> {
    return this.http.post(this.REGISTER_API, user);
  }
}
