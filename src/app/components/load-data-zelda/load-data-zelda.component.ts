import type { OnInit} from '@angular/core';
import { Component, inject, input, signal } from '@angular/core';
import { IonAvatar,
  IonButton, IonButtons,
  IonCard, IonCardContent, IonContent, IonHeader, IonItem, IonLabel, IonList, IonModal, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { heart, heartHalf, heartOutline } from 'ionicons/icons';

import type { DataZelda } from '../../common/models/zelda.model';
import { ZeldaService } from '../../services/zelda-service';
import {AttDefComponent} from "../att-def/att-def.component";
import {HeartRecoveredComponent} from "../heart-recovered/heart-recovered.component";

@Component({
  selector: 'app-load-data-zelda',
  templateUrl: './load-data-zelda.component.html',
  styleUrls: ['./load-data-zelda.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    HeartRecoveredComponent,
    AttDefComponent,
    IonModal,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
    IonCard,
    IonCardContent,
  ],
})
export class LoadDataZeldaComponent implements OnInit {
  category = input.required<string>();
  heartOn = input.required<boolean>();
  private readonly zeldaService: ZeldaService = inject(ZeldaService);
  dataZeldaItems = signal<DataZelda[]>([]);

  constructor() {
    addIcons({ heart, heartHalf, heartOutline });
  }

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    this.zeldaService.getDataZelda(this.category()).subscribe({
      next: (res) => {
        this.dataZeldaItems.set(res.data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

}
