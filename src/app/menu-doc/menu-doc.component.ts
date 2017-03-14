import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kit-menu-doc',
  templateUrl: './menu-doc.component.html',
  styleUrls: ['./menu-doc.component.scss']
})
export class MenuDocComponent implements OnInit {

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
      routerLink: 'menu',
      active: false,
      icon: 'reorder',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
