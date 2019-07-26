import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddASoftPage } from './add-a-soft.page';

describe('AddASoftPage', () => {
  let component: AddASoftPage;
  let fixture: ComponentFixture<AddASoftPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddASoftPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddASoftPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
