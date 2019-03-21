import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../shared/user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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
    private http: HttpClient
  ) { }

  ngOnInit() {
    sessionStorage.setItem('token', '');
  }

  login() {
    let result = this.http.post<Observable<boolean>>(this.LOGIN_API, {
      username: this.user.username,
      password: this.user.password
    }).subscribe(isValid => {
      if (isValid) {
        sessionStorage.setItem(
          'token',
          btoa(this.user.username + ':' + this.user.password)
        );
        this.router.navigate(['']);
      } else {
        alert('Authentication failed.');
      }
    });
  }
}
