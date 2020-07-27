import {AsyncStorage} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const NOTIFICATION_KEY = "UdaciMobileFLashCards:notifications";

export const clearLocalNotifications = () => {
   return AsyncStorage.removeItem(NOTIFICATION_KEY).then(Notifications.cancelAllScheduledNotificationsAsync());
};

export const createNotification = () => {
   return {
      title: '👋 Start a quiz!',
      body: "👋 Don't forget to study today!",
      ios: {
         sound: true
      },
      android: {
         sound: true,
         priority: 'high',
         sticky: false,
         vibrate: true
      }
   }
};

export const setLocalNotification = () => {
   return AsyncStorage.getItem(NOTIFICATION_KEY).then(JSON.parse).then((data) => {
      if (data == null) {
         Permissions.askAsync(Permissions.NOTIFICATIONS).then((status) => {
            if (status === 'granted') {
               Notifications.cancelAllScheduledNotificationsAsync();
               let tomorrow = new Date();
               tomorrow.setDate(tomorrow.getDate() + 1);
               tomorrow.setHours(20);
               tomorrow.setMinutes(0);

               Notifications.scheduleNotificationAsync(createNotification(), {
                  time: tomorrow,
                  repeat: 'day'
               });

               AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
            }
         })
      }
   })
};
