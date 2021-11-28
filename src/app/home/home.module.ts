import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

/* //Import MODAL for CuidadoPage
import { CuidadoPage } from '../cuidado/cuidado.page'; */


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage
  ],
  entryComponents:[
  ]
})
export class HomePageModule {}
