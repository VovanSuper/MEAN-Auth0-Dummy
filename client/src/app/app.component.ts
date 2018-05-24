import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { LocationStrategy, PathLocationStrategy, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRoot: boolean;
  title = 'Auth0 Mysql Data';
  constructor(public auth: AuthService, public location: Location) {
    auth.handleAuthentication();
    this.isRoot = location.isCurrentPathEqualTo('/home' || 'home');
  }

}
