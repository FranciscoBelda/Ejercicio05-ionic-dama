import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonIcon, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { hammer, leaf, paw } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
  ],
})
export class TabsPage {
  constructor() {
    addIcons({paw, hammer, leaf});
  }

}
