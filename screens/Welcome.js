import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,Image,Pressable,ImageBackground} from 'react-native';



export default WelcomeApp=({navigation})=>{
  const handleStart=()=>{
    navigation.navigate('Parent', { screen: 'Welcome' })
  }
  return(
    <View style={styles.container}>
      <ImageBackground style={{ flex: 1, justifyContent: 'center' }}
        resizeMode='cover'
        source={require('../image/logo.jpg')}>
        <Text style={styles.text}>
          GENERAL KNOWLEDGE
        </Text>
        <Text style={styles.intext}>
          Expand Your Mind: Unleash The Power Of Knowledge
        </Text>
        <Pressable style={styles.button} onPress={handleStart}>
          <Text>Get Started</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:25
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    textAlignVertical:'center',
    padding:20,
    margin:10
  },
  intext:{
    fontSize:20,
    backgroundColor:'grey',
    textAlign:'center',
    textAlignVertical:'center',
    padding:20,
    margin:10,
    borderRadius:15
  },
  button:{
    justifyContent:'center',
    padding:10,
    fontSize:16,
    borderRadius:30,
    backgroundColor:'lightblue',
    margin:20,
    textAlignVertical:'center',
    alignItems:'center'
  }
})