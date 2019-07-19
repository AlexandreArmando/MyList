import { Injectable } from '@angular/core';

export interface Item {
  name: string,
  qty: number,
  type: string
}

export interface Todo {
  name: string,
  stages: []
}

export interface Receipes {
  name: string,
  ingredients: []
}



@Injectable({
  providedIn: 'root'
})
export class DataService {

  receipes: [];
  cocktails: [];
  todos:[];

  items: [];
  keypass: [];

  constructor() { }
  




}
