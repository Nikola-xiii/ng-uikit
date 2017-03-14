import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 2 UIKit';

  menuItems = [
    {
      name: 'Buttons',
      id: "buttons",
      active: true,
      routerLink: 'buttons',
      icon: 'touch_app',
      subItems: [
        { name: 'SubItem 1', id: "menu", routerLink: '' },
        { name: 'SubItem 2', id: "menu", routerLink: '' }
      ]
    },
    {
      name: 'Menu',
      id: "menu",
      routerLink: '',
      active: false,
      icon: 'widgets',
    }
  ];

  HelloClick() {
    console.log('Hello from main app');
  }
}
