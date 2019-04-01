import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchResualtPage } from '../search-resualt/search-resualt';

@IonicPage()
@Component({
  selector: 'page-search-text',
  templateUrl: 'search-text.html',
})
export class SearchTextPage {
  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      
    ];
    
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  search(q:string) { 
    this.navCtrl.push(SearchResualtPage ,{search:q} ); 
  }
}
