import React from 'react';
import { View, Text, Button } from 'react-native';

const WelcomeScreen = ({ navigation }) => (
  <View style={{justifyContent: 'center', flexGrow: 1, alignItems: 'center'}}>
    <Text>Olá</Text>
    <Button onPress={() => navigation.navigate('MainArea') } title="Go" />
  </View>
);

export default WelcomeScreen;
