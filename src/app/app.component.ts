import {Component} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";
import {Router} from "@angular/router";
import {UserService} from "./core/services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular';

  routesWhereLeftMenuIsShown = [
    '/rides', '/messages', '/notifications', '/profile'
  ]

  constructor(
    public router : Router,
    private userService : UserService) {
  }

  onTabChanged(event: MatTabChangeEvent): void{
    switch(event.index){
      case 0:
        this.router.navigate(['/rides']);
        break;
      case 1:
        this.router.navigate(['/messages']);
        break;
      case 2:
        this.router.navigate(['/profile']);
        break;
    }
  }

  shouldShowLeftMenu(): boolean {
    const currentUrl = this.router.url;
    return this.routesWhereLeftMenuIsShown.some(v => currentUrl.indexOf(v) !== -1);
  }

  isAdmin() {
    return this.userService.isAdmin();
  }

  switchAdminRoute() {
    if(this.router.url.endsWith('admin')) {
      return '/rides';
    }
    return '/admin';
  }
}
