import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WelcomeApp from './screens/Welcome';
import SettingsApp from './screens/Settings';
import AboutApp from './screens/About';
import TTSApp from './screens/texttospeech';
import SignupScreen from './screens/signup';


import AbbreviationApp from './screens/Abbscreen';
import CountriesApp from './screens/Country';
import IslamicApp from './screens/Islamicinfo';
import PakApp from './screens/Pakinfo';
import WorshipApp from './screens/Worship';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarPosition="right"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Abbreviation" component={AbbreviationApp} />
      <Tab.Screen name="Countries" component={CountriesApp} />
      <Tab.Screen name="Islamic" component={IslamicApp} />
      <Tab.Screen name="Pak" component={PakApp} />
      <Tab.Screen name="Worship" component={WorshipApp} />
    </Tab.Navigator>
  );
};

const MainScreen=({navigation})=>{
  return(
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='GK Portions' component={TabNavigator}/>
      <Tab.Screen name='Text-To-Speech' component={TTSApp}/>
      <Tab.Screen name='Settings' component={SettingsApp}/>
    </Tab.Navigator>
  )
}

function App () {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name='Home' component={MainScreen} />
      <Drawer.Screen name='About' component={AboutApp} />
    </Drawer.Navigator>
  )
}

export default function APP(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Welcome' component={WelcomeApp}/>
        <Stack.Screen name='SignUp' component={SignupScreen}/>
        <Stack.Screen name='Parent' component={App}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
