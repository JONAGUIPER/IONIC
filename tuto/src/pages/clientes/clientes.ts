import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteDetailsPage } from '../cliente-details/cliente-details';

/**
 * Generated class for the ClientesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {
  icons: string[];
  clientes: Array<{name: string, id: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['checkmark-circle', 'close'];

    this.clientes = [];
    for(let i = 1; i < 11; i++) {
      this.clientes.push({
        name: 'Nombre del cliente ' + i,
        id: 'A' + Math.floor(Math.random() * 10000),
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  clienteView(event, item) {
    this.navCtrl.push(ClienteDetailsPage, {
      item: item
    });
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for(let i = 1; i < 11; i++) {
        this.clientes.push({
          name: 'Nombre del cliente ' + i,
          id: 'A' + Math.floor(Math.random() * 10000),
          icon: this.icons[Math.floor(Math.random() * this.icons.length)]
        });
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


}
