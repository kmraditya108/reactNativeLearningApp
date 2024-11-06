/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';

import AppNavigator from './src/screens/AppNavigator';
import { store } from './src/redux/stores';



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StoreProvider store={store}>
        <PaperProvider>
          <ScrollView
            contentContainerStyle={ss.scrollContainer}
            style={backgroundStyle}>
            <AppNavigator />
          </ScrollView>
        </PaperProvider>
      </StoreProvider>
    </SafeAreaView>
  );
}

const ss = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 5,
  },
});

export default App;
