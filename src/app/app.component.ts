import {Component, Directive,ElementRef,OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 2 UIKit';

  menuItems = [
    {
      name: 'Dashboard',
      routerLink: 'readme',
      icon: 'dashboard',
      subItems: [
        { name: 'SubItem 1', id: "menu", routerLink: '' },
      ]
    },
    {
      name: 'Buttons',
      id: "buttons",
      active: true,
      routerLink: 'buttons',
      icon: 'touch_app'
    },
    {
      name: 'Menu',
      id: "menu",
      routerLink: 'menu',
      active: false,
      icon: 'menu',
      subItems: [
        { name: 'SubItem 1', id: "menu", routerLink: '' },
        { name: 'SubItem 2', id: "menu", routerLink: '' },
        { name: 'SubItem 3', id: "menu", routerLink: '' },
        { name: 'SubItem 4', id: "menu", routerLink: '' }
      ]
    }
  ];

  HelloClick() {
    console.log('Hello from main app');
  }
}
