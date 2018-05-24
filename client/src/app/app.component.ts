import { Component } from '@angular/core';
import { AuthService } from 'client/src/auth/auth.service';
import { LocationStrategy, PathLocationStrategy, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRoot: boolean;
  constructor(public auth: AuthService, public location: Location) {
    auth.handleAuthentication();
    this.isRoot = location.isCurrentPathEqualTo('/home');
  }

}
