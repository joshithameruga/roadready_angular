import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { sendNotification } from '../store/notification.action';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  
  constructor(private store: Store) { }

  sendNotification( message: string) {
    this.store.dispatch(sendNotification({  message }));
  }
}
