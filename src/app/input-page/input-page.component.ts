import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kit-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {

  constructor() { }

  public validInput() {
    return false;
  }

  ngOnInit() {
  }

}
