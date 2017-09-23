import { Component } from '@angular/core';
import {IonicPage} from 'ionic-angular';

@IonicPage({
  name:'tabs',
  segment:'tabs'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'home';
  tab2Root = 'setting';
  constructor() {

  }
}
