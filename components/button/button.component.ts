import { NgModule, Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  MakeAfterClick = function() {
    console.log('Helllo from UIKit');
  }
}

@NgModule({
  imports: [],
  exports: [ButtonComponent],
  declarations: [ButtonComponent]
})

export class ButtonModule { }
