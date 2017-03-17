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
      name: 'Test1',
      email: 'test1@test.com',
      vendor: 'LoopMe',
      company: 'Home',
      action: 'login',
      action_list: [
        'remove',
        'update'
      ]
    },
    {
      id: 12,
      email: 'test2@test.com',
      vendor: 'LoopMe',
      company: 'EA Sport',
      action: 'login',
      action_list: [
        'remove',
      ]
    }
  ];

  public settings: Object = {
    headers: [
      { key: 'id', name: 'id', sortable: true, type: 'text'},
      { key: 'name', name: 'name', sortable: false, type: 'text'},
      { key: 'company', name: 'company', sortable: false, type: 'text'},
      { key: 'vendor', name: 'vendor', sortable: true, type: 'text'},
      { key: 'email', name: 'email', sortable: false, type: 'link'},
      { key: 'action', name: 'email', sortable: false, type: 'action'},
    ]
  };

  ngOnInit() {
  }

}
