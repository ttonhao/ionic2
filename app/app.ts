import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {HomePage} from './pages/home/home';
import {MenuTestePage} from './pages/menu-teste/menu-teste';
import { GeneratedPage } from './pages/generated/generated';

@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  pages: Array<{ component: any, title: string, icon: string }>;
  constructor(platform: Platform, private menuCtrl: MenuController) {
    platform.ready().then(() => {
      this.pages = [
        { component: HomePage, title: 'Home', icon: 'home' },
        { component: MenuTestePage, title: 'Menu Teste', icon: 'menu' },
        { component: GeneratedPage, title: 'Pagina Gerada', icon: 'home' }
        
      ];
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
  openPage(page: any, menuSide: string): void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide);
  }
  menuOpened(): void {
    console.log('abriu');
  }

}

ionicBootstrap(MyApp, [], {
  menuType: 'overlay'

});
