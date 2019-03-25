import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../../model/model.user';

@Component({
  selector: 'app-component-user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};
  public API = '//localhost:8080';
  public LOGIN_API = this.API + '/login';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('user_id', '');
  }

  login() {
    const result = this.http.post<Observable<boolean>>(this.LOGIN_API, {
      username: this.user.username,
      password: this.user.password
    }).subscribe(user => {
      if (user) {
        sessionStorage.setItem('token', btoa(this.user.username + ':' + this.user.password));
        this.user = new User(user);
        sessionStorage.setItem('user_id', this.user.id);

        this.router.navigate(['/car']);
      } else {
        alert('Authentication failed.');
      }
    });
  }
}
