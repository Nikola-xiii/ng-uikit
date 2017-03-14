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
      id: "btn",
      active: true,
      link: 'button',
      icon: 'touch_app',
      subItems: [
        { name: 'SubItem 1', id: "menu", link: '' },
        { name: 'SubItem 2', id: "menu", link: '' }
      ]
    },
    {
      name: 'Menu',
      id: "menu",
      link: '',
      active: false,
      icon: 'widgets',
    }
  ];

  HelloClick() {
    console.log('Hello from main app');
  }
}
