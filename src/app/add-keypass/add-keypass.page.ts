import { Component, ViewChild } from '@angular/core';
import { Keypass, StorageService } from '../services/storage.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-keypass',
  templateUrl: './add-keypass.page.html',
  styleUrls: ['./add-keypass.page.scss'],
})
export class AddKeypassPage {

  keypasss: Keypass[] = [];
  @ViewChild('f')f: NgForm;

  constructor(private router: Router, private storageService: StorageService, private toastController: ToastController) { }

  addToKeys(f: NgForm) {
    let keypass: Keypass = {
      name: f.value.name,
      login: f.value.login,
      password: f.value.pwd
    }; 
    this.storageService.addKeypass(keypass).then(keypass => {
      this.showToast('item-added');
      this.router.navigate(['/keypass']);
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
