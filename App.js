import 'react-native-gesture-handler';
import React from 'react';
import App from './src/navigation/index';
import { ThemeProvider } from 'styled-components/native';
import { useColorScheme, StatusBar } from 'react-native';
import themes from './src/theme';

export default function Main() {
  return (
    <ThemeProvider theme={themes.light}>
      <StatusBar barStyle="dark-content" />
      <App />
    </ThemeProvider>
  );
}
