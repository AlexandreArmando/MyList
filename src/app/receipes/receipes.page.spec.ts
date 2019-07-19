import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceipesPage } from './receipes.page';

describe('ReceipesPage', () => {
  let component: ReceipesPage;
  let fixture: ComponentFixture<ReceipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceipesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
