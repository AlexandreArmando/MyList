import { Component } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
  login: string;
  password: string;

  constructor(ev: any) {
    this.login=ev;
    console.log("login");
  }
  

}
