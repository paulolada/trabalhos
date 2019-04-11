import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GrandePage } from './grande';

@NgModule({
  declarations: [
    GrandePage,
  ],
  imports: [
    IonicPageModule.forChild(GrandePage),
  ],
})
export class GrandePageModule {}
