import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-menu-page',
  templateUrl: './menu-page.component.html'
})
export class MenuPage implements OnInit {

  menuItems = [
    {
      name: 'Menu',
      id: "done",
      active: true,
      routerLink: '',
      icon: 'touch_app',
      subItems: [
        { name: 'SubItem 1', id: "menu", routerLink: '' },
        { name: 'SubItem 2', id: "menu", routerLink: '' }
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
