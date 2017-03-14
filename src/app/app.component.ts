import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 2 UIKit';
  CreateBTNText = "Create";

  menuItems = [
    {
      name: 'Buttons',
      id: "btn",
      active: true,
      //iconUrl: '/assets/img/ic_applications_48px.svg',
      icon: 'touch_app',
      subItems: [
        { name: 'SubItem 1', id: "menu" },
        { name: 'SubItem 2', id: "menu" }
      ]
    },
    {
      name: 'Menu',
      id: "menu",
      active: false,
      icon: 'widgets',
    }
  ];

  HelloClick() {
    console.log('Hello from main app');
  }
}
