import { Component, ViewChild } from '@angular/core';
import { Item, StorageService } from '../services/storage.service';
import { Platform, ToastController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage {

  items: Item[] = [];
  newItem: Item = <Item>{};
  @ViewChild('myList')myList: IonList;
  
  constructor(private storageService: StorageService, private plateform: Platform, private toastController: ToastController) { 
    this.plateform.ready().then(() => {
      this.loadItems();
    });
  }

  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  deleteItem(item: Item) {
    this.storageService.deleteItem(item.name).then(item => {
      this.showToast('item-removed');
      this.myList.closeSlidingItems();
      this.loadItems();
    });
  }
  updateItem(item: Item) {
    item.name = 'test: ${item.name@';
    this.storageService.updateItem(item).then(item => {
      this.showToast('item-updated');
      this.myList.closeSlidingItems();
      this.loadItems();
    })
  }




}
