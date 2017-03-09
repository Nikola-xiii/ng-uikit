import { NgUikitPage } from './app.po';

describe('ng-uikit App', () => {
  let page: NgUikitPage;

  beforeEach(() => {
    page = new NgUikitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
