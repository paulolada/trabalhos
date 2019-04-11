import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PequenaPage } from './pequena';

@NgModule({
  declarations: [
    PequenaPage,
  ],
  imports: [
    IonicPageModule.forChild(PequenaPage),
  ],
})
export class PequenaPageModule {}
