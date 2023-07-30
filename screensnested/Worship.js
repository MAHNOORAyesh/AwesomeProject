import React from 'react';
import {Text,View,SectionList,ImageBackground,StyleSheet} from 'react-native';

export default WorshipApp=({navigation})=>{
  return(
    <View style={{flex:1,padding:10,margin:10,justifyContent:'center',marginTop:10,}}>
      <ImageBackground source={require('../image/makkah.jpg')}>
        <Text style={{ fontWeight: 'bold', fontSize: 25, textAlign: 'center', marginTop: 20, padding: 20 }}>
          FAMOUS PLACES OF WORSHIP IN WORLD </Text>
      </ImageBackground>
      <SectionList
        sections={PlacesOfWorship}
        renderItem={({ item }) => (
          <Text
            style={{fontSize: 10,color: 'black',backgroundColor: 'lightblue',
            textAlignVertical: 'center',paddingLeft: 10}}>
            {item}</Text>)}
        renderSectionHeader={({ section: { name } }) => (
          <Text
            style={{fontSize: 12,color: 'white',backgroundColor: 'blue',borderRadius: 10,
            marginTop: 5,textAlignVertical: 'center',padding: 5,fontWeight:'bold'}}>
            {name}</Text>)}
            />
    </View>
  )
}

const PlacesOfWorship = [
  {
    id: 1,
    name:'Mecca, SAUDI ARABIA:',
    data: ['Mecca is the holiest city in Islam and the birthplace of the Prophet Muhammad(P.B.U.H).','The Kaaba, located in the Masjid al-Haram (Great Mosque), is the focal point of the Islamic pilgrimage known as Hajj.'],
  },
  {
    id: 2,
    name:'Medina, SAUDI ARABIA:',
    data:['Medina is the second holiest city in Islam.','It is where the Prophet Muhammad migrated and established the first Islamic state.','The Prophet`s Mosque, containing his tomb, is a revered site for Muslims.']
  },
  {
    id:3,
    name:'Jerusalem, PALESTINE:',
    data:['It is a significant religious site for Judaism, Christianity, and Islam.','It houses various holy places such as the Western Wall, the Church of the Holy Sepulchre, and the Al-Aqsa Mosque.']
  },
  {
    id:4,
    name:'Golden Temple, Amritsar, INDIA:',
    data:['It is also known as Harmandir Sahib','It is the holiest Gurdwara (Sikh place of worship).',
    'It is a symbol of equality, spiritual devotion, and community service in Sikhism.']
  },
  {
    id:5,
    name:'Angkor Wat, CAMBODIA:',
    data:['It is a massive temple complex.','It is a UNESCO World Heritage site in Cambodia.',
    'Originally built as a Hindu temple.','It later transformed into a Buddhist site.',
    'It is renowned for its architectural grandeur and intricate carvings.']
  },
  {
    id:6,
    name:'Vatican City, Rome, ITALY:',
    data:['It is the spiritual and administrative headquarters of the Roman Catholic Church.',
    'It contains St. Peter`s Basilica, the world`s largest Christian church, and the Sistine Chapel, renowned for its ceiling painted by Michelangelo.']
  }
]
