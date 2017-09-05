import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ClienteDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-cliente-details',
  templateUrl: 'cliente-details.html',
})
export class ClienteDetailsPage {
  selectedItem: any;
  hasEditar: boolean;
  pestana = 'basico';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.hasEditar=false;
  }
  isReadonly(){
    return this.hasEditar;
  }
  toggleReadonly(){
    if(this.hasEditar){
      this.hasEditar=false;
    }else{
      this.hasEditar=true;
    }
  }

}
