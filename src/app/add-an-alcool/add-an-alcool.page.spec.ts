import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnAlcoolPage } from './add-an-alcool.page';

describe('AddAnAlcoolPage', () => {
  let component: AddAnAlcoolPage;
  let fixture: ComponentFixture<AddAnAlcoolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnAlcoolPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnAlcoolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
