import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'uikit-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})

export class GridComponent implements OnInit {
  @Input() GridDataRows: Array<any> = [];
  @Input() GridDataColumns;
  @Input() settings;
  @Output() gridAction = new EventEmitter();

  public actionData: object;

  GetRow(row: object, action: string) {
    this.actionData = {
      action: action,
      row: row
    };

    this.gridAction.emit(this.actionData);
  }

  constructor() {
  }

  ngOnInit() {
  }
}
