import * as React from 'react';
import {Text,View,ImageBackground,Dimensions} from 'react-native';

export default AboutApp=()=>{
  return(
    <View style={{ flex: 1  }}>
      <ImageBackground source={require('../image/about.jpg')} resizeMode='cover'
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, }}>
        <View style={{margin: 10, padding: 20,justifyContent: 'center'}}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 30, padding: 20 }}>
            ABOUT US</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 12, textAlign: 'center', padding: 20 }}>
            🌟 Discover the World of Knowledge </Text>
          <Text style={{ fontSize: 10, textAlign: 'center' }}>
            Elevate Your Understanding with Our Cutting-Edge General Knowledge App! 🌍📚
          </Text>
          <Text style={{ fontSize: 10, textAlign: 'center' }}>
            🔎 Are you ready to embark on a journey of curiosity and enlightenment? Look no further! Introducing
            our state-of-the-art General Knowledge App - your gateway to a treasure trove of information spanning
            across various subjects and disciplines.
          </Text>
          <Text style={{ fontSize: 10, textAlign: 'center' }}>
            🧠 Knowledge is power, and with our app, you can equip yourself with the tools needed to thrive in
            any situation. Whether you are a student eager to ace exams, a professional seeking to stay ahead in your
            career, or simply an avid learner hungry for knowledge - our app caters to all with its user-friendly
            interface and rich content.
          </Text>
          <Text style={{ fontSize: 10, textAlign: 'center' }}>
            📚 Unlock the power of knowledge and unleash the best version of yourself - because learning never
            stops, and with our app, its just a tap away
          </Text>
          <Text style={{ fontSize: 10, textAlign: 'center' }}>
            Are you ready to challenge your mind? 💡 Download now and start your quest for wisdom! 📲
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}
