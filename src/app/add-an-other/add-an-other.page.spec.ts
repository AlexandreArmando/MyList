import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnOtherPage } from './add-an-other.page';

describe('AddAnOtherPage', () => {
  let component: AddAnOtherPage;
  let fixture: ComponentFixture<AddAnOtherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnOtherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnOtherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
