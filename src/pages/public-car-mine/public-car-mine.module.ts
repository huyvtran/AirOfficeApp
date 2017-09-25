import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicCarMinePage } from './public-car-mine';

@NgModule({
  declarations: [
    PublicCarMinePage,
  ],
  imports: [
    IonicPageModule.forChild(PublicCarMinePage),
  ],
})
export class PublicCarMinePageModule {}
