import { Component, ViewChild } from '@angular/core';
import { Keypass, StorageService } from '../services/storage.service';
import { Platform, ToastController, IonList, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../component/popover/popover.component';


@Component({
  selector: 'app-keypass',
  templateUrl: './keypass.page.html',
  styleUrls: ['./keypass.page.scss'],
})
export class KeypassPage {

  keypasss: Keypass[] = [];
  newKeypass: Keypass = <Keypass>{};
  @ViewChild('myKey')myKey: IonList;

  constructor(private storageService: StorageService, private plateform: Platform, private toastController: ToastController, public popoverController: PopoverController) {
    this.plateform.ready().then(() => {
      this.loadKeypasss();
    });
   }

   loadKeypasss() {
    this.storageService.getKeypass().then(keypasss => {
      this.keypasss = keypasss;
    });
  }
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  deleteKeypass(keypass: Keypass) {
    this.storageService.deleteKeypass(keypass.name).then(keypass => {
      this.showToast('item-removed');
      this.myKey.closeSlidingItems();
      this.loadKeypasss();
    });
  }
  updateItem(keypass: Keypass) {
    keypass.name = 'test: ${item.name}';
    this.storageService.updateKeypass(keypass).then(keypass => {
      this.showToast('item-updated');
      this.myKey.closeSlidingItems();
      this.loadKeypasss();
    })
  }

  async presentPopover(ev: any, keypass: Keypass) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true,
      componentProps: { 
        login: keypass.login,
        password: keypass.password 
      }
    });
    return await popover.present();
  }

  showKey(keypass: Keypass) {
    this.presentPopover(null, keypass);
  }

 }
