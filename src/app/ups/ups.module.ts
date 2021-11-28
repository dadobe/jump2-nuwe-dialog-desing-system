import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpsPageRoutingModule } from './ups-routing.module';

import { UpsPage } from './ups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpsPageRoutingModule
  ],
  declarations: [UpsPage]
})
export class UpsPageModule {}
