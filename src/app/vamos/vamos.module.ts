import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VamosPageRoutingModule } from './vamos-routing.module';

import { VamosPage } from './vamos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VamosPageRoutingModule
  ],
  declarations: [VamosPage]
})
export class VamosPageModule {}
