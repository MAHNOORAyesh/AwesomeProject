import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default TTSApp=({navigation}) => {
  const [textToSpeak, setTextToSpeak] = useState('');

  const speakText = () => {
  
    if (Speech.isSpeakingAsync()) {
      Speech.stop();
    }
    Speech.speak(textToSpeak, {
      language: 'en',
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'lightgrey'}}>
      <TextInput
        style={{
          height: 40,width: '80%',borderColor: 'black',
          borderWidth: 1,marginBottom: 20,paddingHorizontal: 10,backgroundColor:'white'
        }}
        placeholder="Enter text to speak..."
        value={textToSpeak}
        onChangeText={(text) => setTextToSpeak(text)}
      />
      <Button title="Speak" onPress={speakText} />
    </View>
  );
}
