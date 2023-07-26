import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import * as Speech from 'expo-speech';

export default TTSApp=({navigation}) => {
  const [textToSpeak, setTextToSpeak] = useState('');

  const speakText = () => {
    // Check if Text-to-Speech is available on the device
    if (Speech.isSpeakingAsync()) {
      Speech.stop();
    }

    // Speak the entered text
    Speech.speak(textToSpeak, {
      language: 'en', // Change this to the appropriate language code if needed
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{
          height: 40,width: '80%',borderColor: 'gray',
          borderWidth: 1,marginBottom: 20,paddingHorizontal: 10
        }}
        placeholder="Enter text to speak..."
        value={textToSpeak}
        onChangeText={(text) => setTextToSpeak(text)}
      />
      <Button title="Speak" onPress={speakText} />
    </View>
  );
}
