import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddAnOtherPage } from './add-an-other.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnOtherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddAnOtherPage]
})
export class AddAnOtherPageModule {}
