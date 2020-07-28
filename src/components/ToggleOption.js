import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import OptionEntry from '~/components/OptionEntry';

export default function ToggleOption(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prevState) => !prevState);

  return (
    <OptionEntry icon={props.icon}>
      <Text style={styles.title}>{props.title}</Text>
      <View justifyContent="flex-end">
        <Switch
          style={styles.switch}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </OptionEntry>
  );
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    flex: 1,
    fontSize: 18,
    paddingLeft: 2,
  },
  switch: {
    color: 'grey',
    fontSize: 30,
  },
});
