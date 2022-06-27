const { withModuleFederation } = require('@nrwl/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  /*
   * Remote overrides for production.
   * Each entry is a pair of an unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'https://app1.example.com'],
   *   ['app2', 'https://app2.example.com'],
   * ]
   */
  // remotes: [
  //     ['shop', 'http://localhost:3000/shop/'],
  //     ['cart', 'http://localhost:3000/cart/'],
  //     ['about', 'http://localhost:3000/about/'],
  //   ],
  remotes: [
    ["shop", 'https://ng-module-federation.netlify.app/shop'],
    ["about", 'https://ng-module-federation.netlify.app/about'],
    ["cart", 'https://ng-module-federation.netlify.app/cart']
  ]
});
