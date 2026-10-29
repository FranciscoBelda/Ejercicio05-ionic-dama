import { Component, input } from '@angular/core';
import { IonIcon } from '@ionic/angular';

@Component({
  selector: 'app-heart-recovered',
  templateUrl: './heart-recovered.component.html',
  styleUrls: ['./heart-recovered.component.scss'],
  imports: [IonIcon],
})
export class HeartRecoveredComponent{
  heartsRecovered = input.required<number | undefined>();
  constructor() {}


  protected readonly Math = Math;
  protected readonly Array = Array;
}
