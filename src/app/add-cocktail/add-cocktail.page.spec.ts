import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCocktailPage } from './add-cocktail.page';

describe('AddCocktailPage', () => {
  let component: AddCocktailPage;
  let fixture: ComponentFixture<AddCocktailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCocktailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCocktailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
