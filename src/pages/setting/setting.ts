import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  
  SaveChanges(form:NgForm)
  {

  }
  Usecamera()
  {
   
  }
  UploadImage()
  {

  }
  LogOut()
  {

  }
}
