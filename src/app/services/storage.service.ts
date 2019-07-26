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

export interface Keypass {
  name: string,
  login: string,
  password: string
}

export interface Cocktail {
  name: string,
  type: string,
  ingredients: Ingredient[]
}

export interface Ingredient {
  name: string,
  type: string,
  dosage: string,
  qty: number,
  com: string
}

const ITEMS_KEY = 'my-items';
const KEYPASS_KEY = 'my-keypass';
const COCKTAIL_KEY = 'my-cocktail';

export interface Receipes {
  name: string,
  ingredients: []
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  // ----------------------------------------------------------------------------------------------
  // Items operations
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
  // ------------------------------------------------------------------------------
  // end of items operations
  // ------------------------------------------------------------------------------

  // Keypass operations
  //Create keypass
  addKeypass(keypass: Keypass): Promise<any> {
    return this.storage.get(KEYPASS_KEY).then((keypasss: Keypass[]) => {
      if(keypasss) {
        keypasss.push(keypass);
        return this.storage.set(KEYPASS_KEY, keypasss);
      } else {
        return this.storage.set(KEYPASS_KEY, [keypass]);
      }
    });
  }
  //Read keypass
  getKeypass(): Promise<Keypass[]> {
    return this.storage.get(KEYPASS_KEY);
  }
  //Update a keypass
  updateKeypass(keypass: Keypass): Promise<any> {
    return this.storage.get(KEYPASS_KEY).then((keypasss: Keypass[]) => {
      if(!keypasss || keypasss.length === 0) {
        return null;
      }
      let newKeypasss: Keypass[] = [];
      for(let i of keypasss) {
        if(i.name === keypass.name) {
          newKeypasss.push(keypass);
        } else {
          newKeypasss.push(i);
        }
      }
      return this.storage.set(KEYPASS_KEY, newKeypasss);
    });
  }
  //Delete keypass
  deleteKeypass(name: string): Promise<Keypass> {
    return this.storage.get(KEYPASS_KEY).then((keypasss: Keypass[]) => {
      if(!keypasss || keypasss.length === 0) {
        return null;
      }
      let toKeep: Keypass[] = [];
      for(let i of keypasss) {
        if(i.name !== name) {
          toKeep.push(i);
        }
      }
      return this.storage.set(KEYPASS_KEY, toKeep);
    });
  }
  // ------------------------------------------------------------------------------
  // end of keypass operations
  // ------------------------------------------------------------------------------

// Cocktail operations
  //Create keypass
  addCocktail(cocktail: Cocktail): Promise<any> {
    return this.storage.get(COCKTAIL_KEY).then((cocktails: Cocktail[]) => {
      if(cocktails) {
        cocktails.push(cocktail);
        return this.storage.set(COCKTAIL_KEY, cocktails);
      } else {
        return this.storage.set(COCKTAIL_KEY, [cocktail]);
      }
    });
  }
  //Read keypass
  getCocktails(): Promise<Cocktail[]> {
    return this.storage.get(COCKTAIL_KEY);
  }
  //Update a keypass
  updateCocktail(cocktail: Cocktail): Promise<any> {
    return this.storage.get(COCKTAIL_KEY).then((cocktails: Cocktail[]) => {
      if(!cocktails || cocktails.length === 0) {
        return null;
      }
      let newCocktails: Cocktail[] = [];
      for(let i of cocktails) {
        if(i.name === cocktail.name) {
          newCocktails.push(cocktail);
        } else {
          newCocktails.push(i);
        }
      }
      return this.storage.set(COCKTAIL_KEY, newCocktails);
    });
  }
  //Delete keypass
  deleteCocktail(name: string): Promise<Cocktail> {
    return this.storage.get(COCKTAIL_KEY).then((cocktails: Cocktail[]) => {
      if(!cocktails || cocktails.length === 0) {
        return null;
      }
      let toKeep: Cocktail[] = [];
      for(let i of cocktails) {
        if(i.name !== name) {
          toKeep.push(i);
        }
      }
      return this.storage.set(COCKTAIL_KEY, toKeep);
    });
  }
  // ------------------------------------------------------------------------------
  // end of cocktails operations
  // ------------------------------------------------------------------------------


}
