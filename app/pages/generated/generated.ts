import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConnectionService } from './../../providers/connection-service/connection-service';

@Component({
  templateUrl: 'build/pages/generated/generated.html',
})
export class GeneratedPage {
  constructor(private nav: NavController, private connectionService: ConnectionService) { }

  buscarCep(): void {
    this.connectionService.getCep('30520540')
      .then((resp) => {
        let json = resp.json();
        console.log(json.localidade);
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
