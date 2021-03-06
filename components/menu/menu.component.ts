import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'uikit-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  @Input() menuItems;

  constructor() {}

  ngOnInit() {
  }
}
