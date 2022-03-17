/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import il8n from './src/components/helper/i18n';

AppRegistry.registerComponent(appName, () => App);
