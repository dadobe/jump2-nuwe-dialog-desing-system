import { Component, OnInit } from '@angular/core';

//Import of ModalController needed for closing function
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cuidado',
  templateUrl: './cuidado.page.html',
  styleUrls: ['./cuidado.page.scss'],
})
export class CuidadoPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  //Close function for dialog window CUIDADO
  closeCuidadoDialog(){
    this.modalController.dismiss();
  }
}
