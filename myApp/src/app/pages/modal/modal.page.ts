import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {


  @Input() nmbre: string;
  @Input() pais: string;


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        'nombre': 'Gerson',
        'pais': 'Guatemala',
      }
    });
    await modal.present();

    const {data} = await modal.onDidDismiss();
    console.log('Retorno del modal', data);

  }

}
