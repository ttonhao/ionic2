import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

import { MenuTestePage } from '../menu-teste/menu-teste';
@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {


  }

  pushPage(): void {
    this.navController.push(MenuTestePage);
  }
}
