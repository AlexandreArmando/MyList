import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemToListPage } from './add-item-to-list.page';

describe('AddItemToListPage', () => {
  let component: AddItemToListPage;
  let fixture: ComponentFixture<AddItemToListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddItemToListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemToListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
