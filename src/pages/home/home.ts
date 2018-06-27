import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//
import { RegisterUserPage } from '../register-user/register-user';
import { RegisterUserPinPage } from '../register-user-pin/register-user-pin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  pin(){
    this.navCtrl.push(RegisterUserPinPage);
  }

  registerUser(){
    this.navCtrl.push(RegisterUserPage);
  }

}
