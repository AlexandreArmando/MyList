import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeypassPage } from './keypass.page';

describe('KeypassPage', () => {
  let component: KeypassPage;
  let fixture: ComponentFixture<KeypassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeypassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeypassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
