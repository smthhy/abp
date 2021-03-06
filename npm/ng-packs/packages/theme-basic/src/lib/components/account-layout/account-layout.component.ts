import { Component } from '@angular/core';
import { eLayoutType } from '@abp/ng.core';

@Component({
  selector: 'abp-layout-account',
  template: `
    <router-outlet></router-outlet>
    <abp-confirmation></abp-confirmation>
    <abp-toast></abp-toast>
  `,
})
export class AccountLayoutComponent {
  // required for dynamic component
  static type = eLayoutType.account;
}
