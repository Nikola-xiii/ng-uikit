import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kit-menu-doc',
  templateUrl: './menu-doc.component.html',
  styleUrls: ['./menu-doc.component.scss']
})
export class MenuDocComponent implements OnInit {

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
