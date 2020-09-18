import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component, useEffect } from 'react';
import { Text, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import AppLoadingScreen from '~/screens/AppLoadingScreen';
import GroupScreen from '~/screens/GroupScreen';
import LoginScreen from '~/screens/LoginScreen';
import MatchRegisterScreen from '~/screens/MatchRegisterScreen';
import ProfileScreen from '~/screens/ProfileScreen';
import SettingScreen from '~/screens/SettingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  console.log('Message handled in the background!', remoteMessage);
});

async function saveTokenToDatabase(token) {
  let userId = AsyncStorage.getItem('myId');
  // Add the token to the users datastore
  await firestore()
    .collection('users')
    .doc(userId)
    .update({
      tokens: firestore.FieldValue.arrayUnion(token),
    });
}

function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={ProfileScreen} />
      <Stack.Screen name="MatchRegister" component={MatchRegisterScreen} />
    </Stack.Navigator>
  );
}

function MyTabIndicator() {
  return <View style={{ height: 10, width: 10, backgroundColor: 'white' }} />;
}

function App(props) {
  useEffect(() => {
    console.log(props.isLoading);
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    messaging()
      .getToken()
      .then((token) => {
        console.log('A new FCM token !', JSON.stringify(token));
        return saveTokenToDatabase(token);
      });

    // If using other push notification providers (ie Amazon SNS, etc)
    // you may need to get the APNs token instead for iOS:
    // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => {
    // return saveTokenToDatabase(token); }); }

    // Listen to whether the token changes
    messaging().onTokenRefresh((token) => {
      saveTokenToDatabase(token);
    });

    return unsubscribe;
  }, []);

  const chooseScreen = (props) => {
    if (props.isLoading) {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Loading" component={AppLoadingScreen} />
        </Stack.Navigator>
      );
    }
    if (props.isLogin) {
      return (
        <Tab.Navigator
          tabBarOptions={{ renderIndicator: MyTabIndicator }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'ios-home';
              } else if (route.name === 'Setting') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              } else if (route.name === 'Group') {
                iconName = 'ios-people';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Group" component={GroupScreen} />
          <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
      );
    } else {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      );
    }
  };

  return <NavigationContainer>{chooseScreen(props)}</NavigationContainer>;
}

function mapStateToProps(state) {
  return {
    isLogin: state.authentication.isLogin,
    isLoading: state.authentication.isLoading,
  };
}

export default connect(mapStateToProps)(App);
