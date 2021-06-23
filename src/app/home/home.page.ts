import { Component } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public network: Network, public dialog: Dialogs) {
    this.network.onDisconnect().subscribe(() => {
      this.dialog.alert('network was disconnected: -()');
    });

    this.network.onConnect().subscribe(() => {
      setTimeout(() => {
        this.dialog.alert('we got a' + this.network.type + 'connection,woohoo!');
      }, 2000);
    });
  }

}
