import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-module-federation-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'host';

  constructor(private router: Router) {
    console.log(this.router)
    // this.router.navigate(['shop'])
  }

}
