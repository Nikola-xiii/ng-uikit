import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPage } from './button-page.component';

describe('ButtonDocComponent', () => {
  let component: ButtonPage;
  let fixture: ComponentFixture<ButtonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
