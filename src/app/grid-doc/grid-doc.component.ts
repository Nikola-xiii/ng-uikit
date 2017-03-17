import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kit-grid-doc',
  templateUrl: './grid-doc.component.html',
  styleUrls: ['./grid-doc.component.scss']
})
export class GridDocComponent implements OnInit {

  constructor() { }

  tableTypes = [
    'Text',
    'Action',
    'Links',
    'Device'
  ];

  public GridDataRows = [
    {
      id: 11,
      email: 'test1@test.com',
      action: 'login',
      action_list: [
        'remove',
        'update'
      ]
    },
    {
      id: 12,
      email: 'test2@test.com',
      action: 'login',
      action_list: [
        'remove',
      ]
    }
  ];

  public GridSettings: Array<any> = [

  ];

  ngOnInit() {
  }

}
