import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  name: string,
  qty: number,
  type: string
}

export interface Todo {
  name: string,
  stages: []
}

const ITEMS_KEY = 'my-items';

export interface Receipes {
  name: string,
  ingredients: []
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  //Create item
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if(items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }
  //Read items
  getItems(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }
  //Update an item
  updateItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if(!items || items.length === 0) {
        return null;
      }
      let newItems: Item[] = [];
      for(let i of items) {
        if(i.name === item.name) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newItems);
    });
  }
  //Delete
  deleteItem(name: string): Promise<Item> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if(!items || items.length === 0) {
        return null;
      }
      let toKeep: Item[] = [];
      for(let i of items) {
        if(i.name !== name) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }





}
