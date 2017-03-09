import {NgModule, Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'uikit-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [],
  exports: [SelectComponent],
  declarations: [SelectComponent]
})
export class SelectModule { }
