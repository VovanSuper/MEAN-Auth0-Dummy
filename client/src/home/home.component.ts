import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { ApiService } from '../app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model;

  constructor(public auth: AuthService, public apiSvc: ApiService) { }

  ngOnInit() {
  }

  get today() {
    return new Date();
  }

  getData(date?: Date) {
    if (this.auth.isAuthenticated()) {
      this.apiSvc.getData().subscribe(data => {
        console.log(data)
      })
    }

  }
}
