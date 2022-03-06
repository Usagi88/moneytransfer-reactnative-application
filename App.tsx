/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './src/components/Views/Home';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider as PaperProvider} from 'react-native-paper';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import CustomDrawerContent from './src/components/common/CustomDrawerContent';
import Profile from './src/components/Views/Profile';
import ChangePassword from './src/components/Views/ChangePassword';
import InviteFriends from './src/components/Views/InviteFriends';
import ContactUs from './src/components/Views/ContactUs';
import About from './src/components/Views/About';
import RefreshApp from './src/components/common/RefreshApp';
import Logout from './src/components/common/Logout';
import ExitApp from './src/components/common/ExitApp';
import ChangeAccount from './src/components/common/ChangeAccount';
import Settings from './src/components/common/Settings';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createStackNavigator} from '@react-navigation/stack';
import {
  faHome,
  faUserAlt,
  faCalendarAlt,
  faLock,
  faBullhorn,
  faPhoneAlt,
  faInfoCircle,
  faSyncAlt,
  faSignOutAlt,
  faPowerOff,
  faUserFriends,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import Services from './src/components/Views/Services';
import DrawerNavigators from './src/components/common/DrawerNavigators';
import DhiraaguReload from './src/components/Views/Services/DhiraaguReload';
import Navbar from './src/components/common/Navbar';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8',
});
//const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <PaperProvider
      settings={{
        icon: props => <AwesomeIcon {...props} />,
      }}>
      <NavigationContainer>
        <DrawerNavigators/>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
