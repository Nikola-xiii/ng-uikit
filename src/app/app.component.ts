import { Component, Directive, OnInit, ElementRef } from '@angular/core';

declare var Prism: any;

@Directive({
  selector: '[pCode]'
})
export class CodeHighlighter implements OnInit {

  constructor(public el: ElementRef) {}

  ngOnInit() {
    Prism.highlightElement(this.el.nativeElement);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular 2 UIKit';

  menuItems = [
    {
      name: 'ReadMe',
      routerLink: 'readme',
      icon: 'warning',
    },
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
      icon: 'menu',
    }
  ];

  HelloClick() {
    console.log('Hello from main app');
  }
}
