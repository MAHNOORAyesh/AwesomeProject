import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import WelcomeApp from './screens/Welcome';
import SettingsApp from './screens/Settings';
import AboutApp from './screens/About';
import TTSApp from './screens/texttospeech';
import SignupScreen from './screens/signup';

import AbbreviationApp from './screensnested/Abbscreen';
import CountriesApp from './screensnested/Country';
import IslamicApp from './screensnested/Islamicinfo';
import PakApp from './screensnested/Pakinfo';
import WorshipApp from './screensnested/Worship';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      activeTintColor: 'darkblue',
      inactiveTintColor: 'darkblack',
      tabBarStyle: {
        backgroundColor: 'lightgrey',borderTopWidth: 2,borderTopColor: 'gray'
      },
    }}>
      <Tab.Screen name="Abbreviation" component={AbbreviationApp} options={{
        tabBarLabel:'Abreviation',
        tabBarIcon:({color,size})=>(
          <Icon name='list' color={color} size={size} />
      <Tab.Screen name="Countries" component={CountriesApp} options={{
        tabBarLabel:'Countries',
        tabBarIcon:({color,size})=>(
          <Icon name='globe' color={color} size={size}/>
      <Tab.Screen name="Islamic" component={IslamicApp} options={{
        tabBarLabel:'Islamic',
        tabBarIcon:({color,size})=>(
          <Icon name="book" color={color} size={size} />
      <Tab.Screen name="Pak" component={PakApp} options={{
        tabBarLabel:'Pakistan',
        tabBarIcon:({color,size})=>(
          <Icon name='flag' color={color} size={size} />
      <Tab.Screen name="Worship" component={WorshipApp} options={{
        tabBarLabel:'Worship places',
        tabBarIcon:({color,size})=>(
          <Icon name='crosshairs' color={color} size={size}/>
    </Tab.Navigator>
  );
};

const MainScreen=({navigation})=>{
  return(
    <Tab.Navigator screenOptions={{
      headerShown: false,
      activeTintColor: 'darkblue',
      inactiveTintColor: 'darkblack',
      tabBarStyle: {
        backgroundColor: 'lightblue', borderTopWidth: 2,borderTopColor: 'blue'
      },
    }}>
      <Tab.Screen name='GK Portions' component={TabNavigator} options={{
        tabBarLabel:'GK Portion',
        tabBarIcon:({color,size})=>(
          <Icon name='graduation-cap' color={color} size={size}/>
      <Tab.Screen name='Text-To-Speech' component={TTSApp} options={{
        tabBarLabel:'Text-To-Speech',
        tabBarIcon:({color,size})=>(
          <Icon name='volume-up' color={color} size={size}/>
      <Tab.Screen name='Settings' component={SettingsApp} options={{
        tabBarLabel:'Settings',
        tabBarIcon:({color,size})=>(
          <Icon name='cogs' color={color} size={size}/>
    </Tab.Navigator>
  )
}

function App () {
  return (
    <Drawer.Navigator initialRouteName='Home' screenOptions={{
      activeTintColor: 'darkblue',
      inactiveTintColor: 'gray',
      itemStyle: { marginVertical: 5 },drawerStyle: {backgroundColor: 'darkgrey',width: 200,},
    }}>
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
