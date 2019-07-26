import { Component, OnInit, ViewChild } from '@angular/core';
import { Cocktail, StorageService, Ingredient } from '../services/storage.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-cocktail',
  templateUrl: './add-cocktail.page.html',
  styleUrls: ['./add-cocktail.page.scss'],
})
export class AddCocktailPage {

  cocktails: Cocktail[] = [];
  ingredients: Ingredient[] = [];
  @ViewChild('f')f: NgForm;
  indicator: Number = 1;

  constructor(private router: Router, private storageService: StorageService, private toastController: ToastController) { }

  addCocktail(f: NgForm) {
    let cocktail: Cocktail = {
      name: f.value.name,
      type: f.value.type,
      ingredients: f.value.ingredients
    }; 
    this.storageService.addCocktail(cocktail).then(cocktail => {
      this.showToast('item-added');
      this.router.navigate(['/cocktail']);
    });
  }
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  async segmentChanged(ev: any) {
    if(this.indicator==1) {
      this.indicator=0;
    } else {
      this.indicator=1;
    }
  }


}
