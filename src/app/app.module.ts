import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

//Import module for CuidadoPage
import { CuidadoPageModule } from './cuidado/cuidado.module';

//Import module for VamosPage
import { VamosPageModule } from './vamos/vamos.module';

//Import module for UpsPage
import { UpsPageModule } from './ups/ups.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CuidadoPageModule, VamosPageModule, UpsPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
