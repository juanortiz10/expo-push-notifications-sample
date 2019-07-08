import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';

// Utileria
async function getToken() {
  const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

  if (status !== 'granted') {
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync();
  console.log(token);
  return token;
}

export default class App extends React.Component {
  async componentDidMount() {
    const expoToken = await getToken();
  }

  render() {
    return (
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}
