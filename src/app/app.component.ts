import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
  }

  logout() {
    this.username = '';
    this.router.navigate(['/car']);
  }
}
