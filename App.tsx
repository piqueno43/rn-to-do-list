import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  useFonts,
  Inter_400Regular,
} from '@expo-google-fonts/inter';

import { Home } from './src/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (
      <>
        <Home />
        <StatusBar style="light" />
      </>
    );
  }
}


