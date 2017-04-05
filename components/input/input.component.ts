import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'uikit-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {
  @Input() label: string;
  @Input() required: boolean;
  @Input() errorText: string;
  @Input("placeholder") placeholder: string;
  @Input() valid: boolean;
  @Input() disabled: boolean;
  @Input() value: string;
  //@Output() value: any = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }
}
