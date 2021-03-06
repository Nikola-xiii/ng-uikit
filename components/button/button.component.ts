import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'uikit-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input("UIButtonType") UIButtonType: string;
  @Input("type") type: string;
  @Input("icon") icon: string;
  @Input("size") size: string = "80px";

  @Input() disabled: boolean;

  ngOnInit() {}
}
