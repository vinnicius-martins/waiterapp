import 'expo-dev-client';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Main } from './src/Main';
import { StatusBar } from 'expo-status-bar';
import messaging from '@react-native-firebase/messaging';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  useEffect(() => {
    async function requestUserPermission() {
      const authStatus = await messaging().requestPermission();
      console.log('Authorization status:', authStatus);
    }

    requestUserPermission();
  }, []);

  useEffect(() => {
    messaging()
      .getToken()
      .then(token => {
        console.log('Device Token:', token);
      });

    return messaging().onTokenRefresh(token => {
      console.log('Device Token Changed:', token);
    });
  }, []);

  useEffect(() => {
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  if (!isFontsLoaded) return null;

  return (
    <>
      <StatusBar backgroundColor='#fafafa' style='dark' />
      <Main />
    </>
  );
}
