import React from 'react';
import {Text,View,FlatList,ImageBackground} from 'react-native';

export default IslamicApp=({navigation})=>{
  return(
    <View style={{ flex: 1, padding: 10, margin: 10, justifyContent: 'center', marginTop: 30, }}>
      <ImageBackground source={require('../image/islam.jpg')}>
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 20, padding: 20 }}>
          FACTS ABOUT ISLAM</Text>
      </ImageBackground>
      <FlatList
        data={Facts}
        renderItem={({ item }) => <Text style={{
          fontSize: 10, color: 'black', backgroundColor: 'lightblue',
          textAlignVertical: 'center', padding: 2,margin:1
        }}>{item.name}</Text>}
      />
    </View>
  )
}

const Facts=[
  {id:1,name:'Founded in the 7th century by Prophet Muhammad(P.B.U.H)'},
  {id:2,name:'Islam is a monotheistic religion '},
  {id:3,name:'Major world religion with over 1.8 billion followers.'},
  {id:4,name:'The Quran is the holy book of Islam'},
  {id:5,name:'Five Pillars are declaration of faith, prayer, giving to the needy, fasting during Ramadan, and the pilgrimage to Mecca.'},
  {id:6,name:'Mosques are places of worship for Muslims'},
  {id:7,name:'Islamic law is known as Sharia, derived from the Quran, Hadith, and scholarly interpretations.'},
  {id:8,name:'Ramadan is the holy month of fasting observed by Muslims worldwide. '}
]