import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
  <app-product-list></app-product-list>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicApp';
}
