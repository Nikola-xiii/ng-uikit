import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPage } from './input-page.component';

describe('Input', () => {
  let component: InputPage;
  let fixture: ComponentFixture<InputPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
