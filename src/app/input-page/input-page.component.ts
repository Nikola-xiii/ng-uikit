import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPage implements OnInit {

  constructor() { }

  public validInput() {
    return false;
  }

  ngOnInit() {
  }

}
