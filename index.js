/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Profile from './src/pages/Profile';
import GetStarted from './src/pages/GetStarted';
import SignUp from './src/pages/SignUp';

AppRegistry.registerComponent(appName, () => Profile);
