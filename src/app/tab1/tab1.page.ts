import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonButton, IonGrid, IonCol, IonRow],
})
export class Tab1Page implements OnInit, OnDestroy {
  public readonly count = signal<number>(1);

  public onIncrement(): void {
    this.count.update(c => c + 1);
  }

  public ngOnInit(): void {
    console.debug('ngOnInit run');
  }

  public ngOnDestroy(): void {
    console.debug('ngOnDestroy run');
  }
}
