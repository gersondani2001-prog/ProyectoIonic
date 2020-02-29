import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {


  @ViewChild('lista') lista: IonList;


  usuarios: Observable<any>;


  constructor(private dataService: DataService, private toastCtrl: ToastController) { }

  ngOnInit() {


    this.usuarios = this.dataService.getUsers();

    this.dataService.getUsers().subscribe( console.log );


  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      header: 'Informacion:',
      message,
      duration: 2000,
      position: 'top',
      // buttons: [
      //   {
      //     side: 'start',
      //     icon: 'star',
      //     text: 'Favorite',
      //     handler: () => {
      //       console.log('Favorite clicked');
      //     }
      //   }, {
      //     text: 'Done',
      //     role: 'cancel',
      //     handler: () => {
      //       console.log('Cancel clicked');
      //     }
      //   }
      // ]
    });
    toast.present();
  }





  favorite(user) {
    console.log('favorite', user);
    this.presentToast('Guardo en favoritos');
    this.lista.closeSlidingItems();
  }

  share(user) {
    console.log('share', user);
    this.presentToast('Compartir');
    this.lista.closeSlidingItems();
  }

  borrar(user) {
    console.log('borrar', user);
    this.presentToast('Borrar');
    this.lista.closeSlidingItems();

  }




}
