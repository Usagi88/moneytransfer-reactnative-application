import {
  faBullhorn,
  faCalendarAlt,
  faCog,
  faHome,
  faInfoCircle,
  faLock,
  faPhoneAlt,
  faPowerOff,
  faSignOutAlt,
  faSyncAlt,
  faUserAlt,
  faUserFriends,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import About from '../Views/About';
import ChangePassword from '../Views/ChangePassword';
import ContactUs from '../Views/ContactUs';
import Home from '../Views/Home';
import InviteFriends from '../Views/InviteFriends/InviteFriends';
import Profile from '../Views/Profile';
import ChangeAccount from './ChangeAccount';
import CustomDrawerContent from './CustomDrawerContent';
import ExitApp from './ExitApp';
import Logout from './Logout';
import Navbar from './Navbar';
import RefreshApp from './RefreshApp';
import Settings from './Settings';
import StackNavigators from './StackNavigators';
import {CommonActions} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import SchedulePayment from '../Views/Services/SchedulePayment';

const Drawer = createDrawerNavigator();

const DrawerNavigators = () => {
  const navigation = useNavigation<any>();
  return (
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
        component={StackNavigators}
        options={{
          //header: () => <Navbar />,
          headerShown: false,
          drawerItemStyle: { height: 0 },
          drawerIcon: () => (
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon icon={faHome} size={22} color={'#25BFA3'} />
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
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon icon={faUserAlt} size={22} color={'#25BFA3'} />
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="Scheduled Payment"
        component={SchedulePayment}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon
                icon={faCalendarAlt}
                size={22}
                color={'#25BFA3'}
              />
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
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon icon={faLock} size={22} color={'#25BFA3'} />
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
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon icon={faBullhorn} size={22} color={'#25BFA3'} />
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
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon icon={faPhoneAlt} size={22} color={'#25BFA3'} />
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
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon
                icon={faInfoCircle}
                size={22}
                color={'#25BFA3'}
              />
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
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon icon={faSyncAlt} size={22} color={'#25BFA3'} />
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
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon
                icon={faSignOutAlt}
                size={22}
                color={'#25BFA3'}
              />
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
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon icon={faPowerOff} size={22} color={'#25BFA3'} />
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
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon
                icon={faUserFriends}
                size={22}
                color={'#25BFA3'}
              />
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
            <View
              style={{
                width: 25,
                height: 25,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon icon={faCog} size={22} color={'#25BFA3'} />
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigators;
