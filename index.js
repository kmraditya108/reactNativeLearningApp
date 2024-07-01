/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './src/screens/home';
import SideMenu from './src/screens/common/SideMenu';


AppRegistry.registerComponent(appName, () => Home);
