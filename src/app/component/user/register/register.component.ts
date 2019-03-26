import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../service/user/user.service';

@Component({
  selector: 'app-component-user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() { }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  save(form: NgForm) {
    this.userService.register(form).subscribe(result => {
      this.goToLogin();
    }, error => console.error(error));
  }
}
