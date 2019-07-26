import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddAnAlcoolPage } from './add-an-alcool.page';

const routes: Routes = [
  {
    path: '',
    component: AddAnAlcoolPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddAnAlcoolPage]
})
export class AddAnAlcoolPageModule {}
