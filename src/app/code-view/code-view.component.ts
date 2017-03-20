import { Component, OnInit, Input} from '@angular/core';
import {Prism} from './prism.loader';

@Component({
  selector: 'code-view',
  templateUrl: 'code-view.component.html'
})
export class CodeViewComponent implements OnInit {
  constructor() { }

  @Input() language:string;

  @Input()
  set content(content: string) {
    this.higlightedCodeHTML = Prism.highlight(content, this.language ? Prism.languages[this.language] : '');
  }
  get name() { return this.higlightedCodeHTML; }

  @Input()

  higlightedCodeHTML:string;

  ngOnInit() {

  }
}
