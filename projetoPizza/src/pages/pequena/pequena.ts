import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { sabor } from './../../Models/sabor.model';
import { tamanho } from '../../Models/tamanho.model';

/**
 * Generated class for the PequenaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pequena',
  templateUrl: 'pequena.html',
})
export class PequenaPage {

  items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http) {

  }

  ionViewDidLoad(): Promise<sabor> {
    var getTamanho: sabor;

    return new Promise(resolve => {
      this.http.get('http://localhost:8080/sabores/1').map(res => res.json()).subscribe(data => {
        getTamanho = new sabor();
        getTamanho.sabor = data.sabor;
        getTamanho.preco = data.preco;
        this.items = data;
        console.log(this.items[0].name);
        resolve(getTamanho);
      });
    });
  };


}
