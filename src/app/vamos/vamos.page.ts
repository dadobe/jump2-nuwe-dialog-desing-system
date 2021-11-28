import { Component, OnInit } from '@angular/core';

//IMport ModalCOntroller needed for closing function
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-vamos',
  templateUrl: './vamos.page.html',
  styleUrls: ['./vamos.page.scss'],
})
export class VamosPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  //Close function for dialog window VAMOS
  closeVamosDialog(){
    this.modalController.dismiss()
  }

}
