// notification.actions.ts
import { createAction, props } from '@ngrx/store';

export const sendNotification = createAction(
  '[Notification] Send Notification',
  props<{  message: string }>()
);


