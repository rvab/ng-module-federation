import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-module-federation-shop-main',
  templateUrl: './shop-main.component.html',
  styleUrls: ['./shop-main.component.css'],
})
export class ShopMainComponent {

  constructor(private router: Router) {

  }

  openCart() {
    console.log('coming here ----')
    this.router.navigate(['cart'])
  }


}
