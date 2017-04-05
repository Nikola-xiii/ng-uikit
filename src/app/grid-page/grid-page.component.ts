import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uikit-grid-page',
  templateUrl: './grid-page.component.html'
})
export class GridPage implements OnInit {

  constructor() {}

  public GridDataRows = [
    {
      id: 11,
      name: 'Test1',
      email: 'test1@test.com',
      vendor: 'LoopMe',
      done: 44,
      company: 'Home',
      action: {
        name: 'Login',
        icon: 'input',
      },
    },
    {
      id: 12,
      email: 'test2@test.com',
      vendor: 'LoopMe',
      done: 34,
      company: 'EA Sport',
      action: {
        name: 'Login',
        icon: 'input',
      }
    },
    {
      id: 14,
      name: 'Test1',
      email: 'test1@test.com',
      vendor: 'LoopMe',
      company: 'Home',
      done: 54,
      action: {
        name: 'Login',
        icon: 'input'
      }
    },
    {
      id: 14,
      email: 'test2@test.com',
      vendor: 'LoopMe',
      company: 'EA Sport',
      done: 11,
      action: {
        name: 'Login',
        icon: 'input'
      }
    }
  ];

  public GridDataColumns = {
    id: [11, 12, 13, 14],
    name: ['Test1', 'Test2', 'Test3', 'Test4'],
    email: ['test1@test.com', 'test2@test.com', 'test3@test.com', 'test4@test.com'],
    vendor: ['LoopMe', '', 'EA', 'LoopMe'],
    company: ['LoopMe', 'LoopMe', 'LoopMe', 'LoopMe'],
    action: ['input', 'input', 'input', 'input']
  };

  public settings: Object = {
    headers: [
      { key: 'id', name: 'id', sortable: true, type: 'text'},
      { key: 'name', name: 'name', sortable: false, type: 'text'},
      { key: 'company', name: 'company', sortable: false, type: 'text'},
      { key: 'vendor', name: 'vendor', sortable: true, type: 'text'},
      { key: 'done', name: 'done, %', sortable: false, type: 'progress'},
      { key: 'email', name: 'email', sortable: false, type: 'link'},
      { key: 'action', name: '', sortable: false, type: 'action'},
    ],
  };

  public action: object;

  ngOnInit() {
  }

  getActionGrid(actionData) {
    console.log(actionData, 'Parent')
  }
}
