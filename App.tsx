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

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import CustomDrawerContent from './src/components/common/CustomDrawerContent';
import Icon from 'react-native-vector-icons/FontAwesome';
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

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

EStyleSheet.build({
  // always call EStyleSheet.build() even if you don't use global variables!
  $textColor: '#0275d8',
});
const Drawer = createDrawerNavigator();
/*
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}
*/
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
        <Drawer.Navigator
          drawerContent={props => <CustomDrawerContent {...props} />}
          screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#daf7eb',
            drawerActiveTintColor: 'black',
            drawerInactiveTintColor: 'black',
            drawerLabelStyle: {
              marginLeft: -25,
              fontSize: 15,
              paddingLeft: 10,
            },
          }}>
          <Drawer.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="home" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Profile"
            component={Profile}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="user" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Scheduled Payment"
            component={ChangePassword}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="calendar" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Change Password"
            component={ChangePassword}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="lock" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Invite Friends"
            component={InviteFriends}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="bullhorn" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Contact Us"
            component={ContactUs}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="phone" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="About"
            component={About}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="info-circle" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Refresh App"
            component={RefreshApp}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="phone" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Logout"
            component={Logout}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="sign-out" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Exit App"
            component={ExitApp}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="power-off" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Change Account"
            component={ChangeAccount}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="users" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
          <Drawer.Screen
            name="Settings"
            component={Settings}
            options={{
              headerShown: false,
              drawerIcon: () => (
                <View style={{width: 25, height: 25,alignItems:'center',justifyContent:'center'}}>
                  <Icon name="gear" size={22} color={'#25BFA3'} />
                </View>
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
