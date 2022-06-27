import {NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import {ShopMainModule} from "@ng-module-federation/shop-main";
import { TestShopComponent } from '../test-shop/test-shop.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                redirectTo: 'test',
                pathMatch:'full'
            },
            {
              path: 'test',
              component: TestShopComponent,
            },
          ]),
        ShopMainModule,

    ],
    providers: [],
})
export class RemoteEntryModule {
}
