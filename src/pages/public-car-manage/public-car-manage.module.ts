import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicCarManagePage } from './public-car-manage';

@NgModule({
  declarations: [
    PublicCarManagePage,
  ],
  imports: [
    IonicPageModule.forChild(PublicCarManagePage),
  ],
})
export class PublicCarManagePageModule {}
