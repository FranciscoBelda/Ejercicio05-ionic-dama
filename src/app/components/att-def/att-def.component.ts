import { Component, input } from '@angular/core';
import { IonIcon, IonText } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { flash, shield } from 'ionicons/icons';

import type { Properties } from '../../common/models/zelda.model';

@Component({
  selector: 'app-att-def',
  templateUrl: './att-def.component.html',
  styleUrls: ['./att-def.component.scss'],
  imports: [IonIcon, IonText],
})
export class AttDefComponent {
  properties = input.required<Properties | undefined>();
  constructor() {
    addIcons({flash, shield})
  }


}
