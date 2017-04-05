import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmePage } from './readme.component';

describe('ReadmeComponent', () => {
  let component: ReadmePage;
  let fixture: ComponentFixture<ReadmePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadmePage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
