/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import { RemoteEntryModule } from './remote-entry/entry.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TestShopComponent } from './test-shop/test-shop.component';

@NgModule({
  declarations: [AppComponent, TestShopComponent],
  imports: [
    // BrowserModule,
    RouterModule.forChild(
      [
        {
          path: '',
          redirectTo: 'test',
          pathMatch: 'full'
        },
        // {
        //   path: '',
        //   loadChildren: () =>
        //     import('./remote-entry/entry.module').then(
        //       (m) => m.RemoteEntryModule
        //     ),
        // },
        {
          path: 'test',
          component: TestShopComponent
        }
      ],
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('Shops app module')
  }
}
