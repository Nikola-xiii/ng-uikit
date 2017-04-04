import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'uikit-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ContentComponent implements OnInit {

  @Input() sidebar: boolean = false;
  public width: string = '100%';

  constructor() {}

  ngOnInit() {
    if(this.sidebar) {
      this.width = 'calc(100% - 203px)';
    }
  }
}
