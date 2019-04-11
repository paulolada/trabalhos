import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { token } from './../../Models/token.model';
import { NavController, AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { PizzasPage } from '../pizzas/pizzas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: string;
  password: string;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
     public http: Http) {

  }
  
  login(){
    var checkToken : token;
    let headers = new Headers();
    headers.append('Content-Type','application/json');

    let body = {
      "userName":this.user,
      "password":this.password
    };
    console.log("primeiro");
    this.http.post('http://localhost:8080/logon', JSON.stringify(body), {headers: headers})
      .map(res => res.json())
      .subscribe(data =>{
        console.log("segundo");
        checkToken = new token();
        checkToken.status = data.status;
        console.log(checkToken.status);
        if (data.status == 200){
          let alert = this.alertCtrl.create({
            title: 'Login efetuado com sucesso!',
            buttons: ['OK']
          });
          alert.present();
          this.navCtrl.push(PizzasPage);
        }
        else{
          let alert = this.alertCtrl.create({
            title: 'Usuário ou senha incorretos!',
            buttons: ['OK']
          });
          alert.present();          
        }
      });
  }

}
