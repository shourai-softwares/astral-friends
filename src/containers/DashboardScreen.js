import React from 'react';
import { View, Text } from 'react-native';
import Card from '../components/UI/Card';

const DashboardScreen = () => (
  <View style={{ padding: 10 }}>
    <Card>
      <Text>Complete o seu Mapa</Text>
    </Card>
    <Card style={{ marginTop: 10 }}>
      <Text>Adicione seus amigos</Text>
    </Card>
  </View>
);
DashboardScreen.navigationOptions = {
  title: 'Home',
};

export default DashboardScreen;
