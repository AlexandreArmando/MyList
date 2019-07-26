import { Component, OnInit, ViewChild } from '@angular/core';
import { Cocktail, StorageService } from '../services/storage.service';
import { IonList, Platform, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.page.html',
  styleUrls: ['./cocktails.page.scss'],
})
export class CocktailsPage {

  cocktails: Cocktail[] = [];
  newCoctail: Cocktail = <Cocktail>{};
  @ViewChild('myList')myList: IonList;
  
  constructor(private storageService: StorageService, private plateform: Platform, private toastController: ToastController) { 
    this.plateform.ready().then(() => {
      this.loadCocktails();
    });
  }

  loadCocktails() {
    this.storageService.getCocktails().then(coctails => {
      this.cocktails = coctails;
    });
  }
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  deleteItem(cocktail: Cocktail) {
    this.storageService.deleteCocktail(cocktail.name).then(cocktail => {
      this.showToast('item-removed');
      this.myList.closeSlidingItems();
      this.loadCocktails();
    });
  }
  updateItem(cocktail: Cocktail) {
    cocktail.name = '${cocktail.name}';
    this.storageService.updateCocktail(cocktail).then(cocktail => {
      this.showToast('item-updated');
      this.myList.closeSlidingItems();
      this.loadCocktails();
    })
  }


}
