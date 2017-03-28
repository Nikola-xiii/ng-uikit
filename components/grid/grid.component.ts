import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'uikit-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})

export class GridComponent implements OnInit {

  @Input() GridDataRows: Array<any> = [];
  @Input() GridDataColumns: Object;
  @Input() settings: Object;

  GetRow(row) {

  }

  constructor() {}

  ngOnInit() {
  }
}
