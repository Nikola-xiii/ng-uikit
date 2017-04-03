import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 2 UIKit';

  menuItems = [
    {
      name: 'Readme',
      routerLink: '/readme',
      subItems: [
        { name: 'SubItem 1', id: "menu", routerLink: '' },
      ]
    },
    {
      name: 'Buttons',
      id: "buttons",
      active: true,
      routerLink: '/buttons'
    },
    {
      name: 'Menu',
      id: "menu",
      routerLink: '/menu',
      active: false,
      subItems: [
        { name: 'SubItem 1', id: "menu", routerLink: '' },
        { name: 'SubItem 2', id: "menu", routerLink: '' },
        { name: 'SubItem 3', id: "menu", routerLink: '' },
        { name: 'SubItem 4', id: "menu", routerLink: '' }
      ]
    },
    {
      name: 'Table grid',
      id: "buttons",
      active: true,
      routerLink: '/grid'
    },
    {
      name: 'Text input',
      id: "input",
      active: true,
      routerLink: '/input'
    }
  ];

  HelloClick() {
    console.log('Hello from main app');
  }
}
