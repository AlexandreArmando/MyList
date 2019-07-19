import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm, Form } from '@angular/forms';
import { DataService, Item } from '../services/data.service';
import { StorageService } from '../services/storage.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-item-to-list',
  templateUrl: './add-item-to-list.page.html',
  styleUrls: ['./add-item-to-list.page.scss'],
})
export class AddItemToListPage {

  items: Item[] = [];
  @ViewChild('f')f: NgForm;

  constructor(private router: Router, private storageService: StorageService, private toastController: ToastController) { }

  addToCart(f: NgForm) {
    let item: Item = {
      name: f.value.name,
      qty: f.value.qty,
      type: f.value.type
    }; 
    this.storageService.addItem(item).then(item => {
      this.showToast('item-added');
      this.router.navigate(['/lists']);
    });
  }
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
