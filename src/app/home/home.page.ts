import { Component} from '@angular/core';

//Import MODAL CONTROLLER for the dialog windows
import { ModalController } from '@ionic/angular';

//Import the page that shows dialog window for CUIDADO
import { CuidadoPage } from '../cuidado/cuidado.page';

//Import the page that shows dialog window for VAMOS
import { VamosPage } from '../vamos/vamos.page';

//Import the page that shows dialog window for UPS
import { UpsPage } from '../ups/ups.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //Inyect in constructor the ModalController
  constructor(
    public modalController: ModalController
  ) {}

  //Funtion to open CUIDADO Modal
  async openCuidadoDialog(){
    const cuidado = await this.modalController.create({
      component: CuidadoPage,
      cssClass: 'cuidado-dialog-class'
    });
    return await cuidado.present();
  }

 //Funtion to open VAMOS Modal
  async openVamosModal(){
    const vamos = await this.modalController.create({
      component: VamosPage,
      cssClass: 'vamos-dialog-class'
    });
    return await vamos.present();
  }

  //Funtion to open UPS Modal
  async openUpsModal(){
    const ups = await this.modalController.create({
      component: UpsPage,
      cssClass: 'ups-dialog-class'
    });
    return await ups.present();
  }

}
