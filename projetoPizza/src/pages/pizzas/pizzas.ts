import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { tamanho } from './../../Models/tamanho.model';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PequenaPage } from '../pequena/pequena';
import { MediaPage } from '../media/media';
import { GrandePage } from '../grande/grande';

/**
 * Generated class for the PizzasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pizzas',
  templateUrl: 'pizzas.html',
})
export class PizzasPage {

  items: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http) {

  }

  ionViewDidLoad(): Promise<tamanho> {
    var getTamanho: tamanho;

    return new Promise(resolve => {
      this.http.get('http://localhost:8080/tamanhos').map(res => res.json()).subscribe(data => {
        getTamanho = new tamanho();
        getTamanho.id = data.id;
        getTamanho.name = data.name;
        getTamanho.quantidade_sabores = data.quantidade_sabores;
        this.items = data;
        console.log(this.items[0].name);
        resolve(getTamanho);
      });
    });
  };

  pizza(tamanho: tamanho){
    console.log(tamanho);

    if(tamanho.id == "1"){
      console.log("Pizza pequena selecionada;")
      this.navCtrl.push(PequenaPage);
    }
    else if(tamanho.id == "2"){
      console.log("Pizza media selecionada;")
      this.navCtrl.push(MediaPage);
    }
    else if(tamanho.id == "3"){
      console.log("Pizza grande selecionada;")
      this.navCtrl.push(GrandePage);
    }
  };
}
