import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private currentValueStore = new BehaviorSubject(false);
  isPremium = this.currentValueStore.asObservable();

  constructor() { }

  onPremiumSubsribed(message) {
    this.currentValueStore.next(message);
  }
}
