import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDocComponent } from './button-doc.component';

describe('ButtonDocComponent', () => {
  let component: ButtonDocComponent;
  let fixture: ComponentFixture<ButtonDocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonDocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
