import React from 'react';
import {Text,View,FlatList,ImageBackground} from 'react-native';

export default PakApp=({navigation})=>{
  return(
    <View style={{ flex: 1, padding: 10, margin: 10, justifyContent: 'center', marginTop: 30, }}>
      <ImageBackground source={require('../image/pakistan.jpg')}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', marginTop: 20, padding: 20 }}>
          FACTS ABOUT PAKISTAN
        </Text>
      </ImageBackground>
      <FlatList
        data={facts}
        renderItem={({ item }) => <Text style={{
          fontSize: 10, color: 'black', backgroundColor: 'lightblue',
          textAlignVertical: 'center', padding: 2,margin:1
        }}>{item.name}</Text>}
      />
    </View>
  )
}

const facts=[
  {id:1,name:'Established in  1947'},{id:2,name:'Located in South Asia'},
  {id:3,name:'Borders with India, Afghanistan, Iran, and China.'},
  {id:4,name: 'Pak-Afgan Border ---> 2052km , Pak-China Border ---> 595km , Pak-Iran Border ---> 805km , Pak-India Border ---> 1610km'},
  {id:5,name:'Capital city is Islamabad'},{id:6,name:'population of over 225 million people'},
  {id:7,name:'Fifth most populous country in the world.'},{id:8,name:'Islam is the dominant religion'},
  {id:9,name:'96% is the Muslims population'},
  {id:10,name:'The official languages of Pakistan are Urdu and English'},
  {id:11,name:'Federal parliamentary republic'},{id:12,name:'Islamabad was completed in 1966'},
  {id:13,name:'The Pakistani rupee (PKR)-- official currency of the country.'},
  {id:14,name:'Constitutions tried: 3'},
  {id:15,name:'5 deserts in Pakistan'},{id:16,name:'Balochistan is 43%of total Pakistan '},
  {id:17,name:'5 rivers ....(Indus,Ravi,Sutlej,Jhelum,Chenab)'},{id:18,name:'Length of Indus: 2900km'},
  {id:19,name:'No of words in National anthem: 50'},{id:20,name:'No of lines in National anthem: 15'},
  {id:21,name:'Name of Pakistan by Chaudhary Rehmat Ali'},
  {id:22,name:'Karachi is largest city and economic hub'}
]
