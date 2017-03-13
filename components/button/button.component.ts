import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'uikit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input("UIButtonType") UIButtonType: string;
  @Input("type") type: string;
  @Input("disabled") disabled: boolean = false;
  constructor() {}

  ngOnInit() {}
}
