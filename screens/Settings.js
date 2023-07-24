import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Switch ,StatusBar,useColorScheme} from 'react-native';

export default SettingsApp=({navigation})=> {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  return (
    <View style={styles.settingItem}>
      <Text style={styles.settingLabel}>Notifications</Text>
      <Switch
        value={notificationsEnabled}
        onValueChange={handleNotificationsToggle}
      />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingLabel: {
    fontSize: 18,
  },
});

