import { Component, OnInit } from '@angular/core';

//Import ModalController needed for closing function
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-ups',
  templateUrl: './ups.page.html',
  styleUrls: ['./ups.page.scss'],
})
export class UpsPage implements OnInit {


  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

   //Close function for dialog window UPS
  closeUpsDialog(){
    this.modalController.dismiss();
  }

}
