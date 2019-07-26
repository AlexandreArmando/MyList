import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-a-soft',
  templateUrl: './add-a-soft.page.html',
  styleUrls: ['./add-a-soft.page.scss'],
})

export class AddASoftPage {

  constructor() { 
    
  }

  softTypes: string[] = [
    "Fruit juice",
    "Soda",
    "Water"
  ];
  sodas: string[] = [
    "Coca",
    "Sprite",
    "Fanta"
  ];
  fruitJuices: string[] = [
    "Orange juice",
    "Apple juice"
  ];
  softType: string;
  segmentChanged(ev: any) {
    this.softType = ev.detail.value;
  }
  
}
