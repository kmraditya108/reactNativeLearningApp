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
import AppNavigator from './src/screens/AppNavigator';
import { store } from './src/redux/stores';
import { Provider } from 'react-redux';




// redux <--react-redux is glue between --> react/react-native


// react-redux is glue between redux and react framework

// react-redux



function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Provider store={store}>
        <ScrollView
          contentContainerStyle={ss.scrollContainer}
          style={backgroundStyle}>
          <AppNavigator />
        </ScrollView>
      </Provider>
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
