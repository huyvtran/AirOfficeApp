import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicCarFailureRecordPage } from './public-car-failure-record';

@NgModule({
  declarations: [
    PublicCarFailureRecordPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicCarFailureRecordPage),
  ],
})
export class PublicCarFailureRecordPageModule {}
