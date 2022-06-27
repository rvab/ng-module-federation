import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-module-federation-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {

  constructor(private router: Router) {
  }

  

}
