// notification.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { sendNotification } from './notification.action';


export interface NotificationState {
  
  message: string;
}

export const initialState: NotificationState = {
 
  message: ''
};

export const notificationReducer = createReducer(
  initialState,
  on(sendNotification, (state, {  message }) => ({ ...state,  message }))
);