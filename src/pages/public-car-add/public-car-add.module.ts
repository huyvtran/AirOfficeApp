import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicCarAddPage } from './public-car-add';

@NgModule({
  declarations: [
    PublicCarAddPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicCarAddPage),
  ],
})
export class PublicCarAddPageModule {}
