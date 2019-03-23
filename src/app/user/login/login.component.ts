import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/model.user';

@Component({
  selector: 'app-login',
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
    private http: HttpClient,
    private userService: UserService
  ) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login() {
    let result = this.http.post<Observable<boolean>>(this.LOGIN_API, {
      username: this.user.username,
      password: this.user.password
    }).subscribe(user => {
      if (user) {
        sessionStorage.setItem('token', btoa(this.user.username + ':' + this.user.password));

        this.userService.user = new User(user);
        this.user = user;

        this.router.navigate(['/car/list']);
      } else {
        alert('Authentication failed.');
      }
    });
  }
}
