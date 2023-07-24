import * as React from 'react';
import {View,Text,Button,FlatList,Switch,Pressable,SectionList} from 'react-native'
import {Table,Row,Rows} from 'react-native-table-component';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import WelcomeApp from './screens/welcome';
import HomeApp from './screens/home';
import SettingsApp from './screens/settings';
import AboutApp from './screens/about';

import AbbreviationApp from './screens/abbscreen';
import CountriesApp from './screens/country';
import IslamicApp from './screens/islamicinfo';
import PakApp from './screens/pakinfo';
import WorshipApp from './screens/worship';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const HomeScreenStackNavigator = createStackNavigator();

const HomeScreenWithNestedScreens = () => (
  <HomeScreenStackNavigator.Navigator>
    <HomeScreenStackNavigator.Screen name="Home" component={HomeApp} />
    <HomeScreenStackNavigator.Screen name="ABBREVIATIONS" component={AbbreviationApp} />
    <HomeScreenStackNavigator.Screen name="COUNTRIES" component={CountriesApp} />
    <HomeScreenStackNavigator.Screen name="ISLAM" component={IslamicApp} />
    <HomeScreenStackNavigator.Screen name="PAKISTAN" component={PakApp} />
    <HomeScreenStackNavigator.Screen name="WORSHIP PLACES" component={WorshipApp} />
  </HomeScreenStackNavigator.Navigator>
);

const HomeTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreenWithNestedScreens} />
    <Tab.Screen name="Settings" component={SettingsApp} />
  </Tab.Navigator>
);

const AppDrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeTabNavigator} />
    <Drawer.Screen name="About" component={AboutApp}/>
  </Drawer.Navigator>
);

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeApp} />
        <Stack.Screen name="AppDrawer" component={AppDrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;