import React from 'react';
import { View, Text, Button } from 'react-native';
import Picker, { PickerItem } from '../components/UI/Picker';
import TextInput from '../components/UI/TextInput';

const WelcomeScreen = ({ navigation }) => (
  <View style={{justifyContent: 'center', flexGrow: 1}}>
    <Text>Olá, vamos começar com o básico:</Text>
    <View>
      <Text>Nome de Exibição</Text>
      <TextInput />
    </View>
    <View>
      <Text>Data de nascimento</Text>
      <View style={{ flexDirection: 'row' }}>
        <Picker>
          <PickerItem label="01" value={1} />
          <PickerItem label="02" value={2} />
        </Picker>
        <Picker>
          <PickerItem label="Abril" />
        </Picker>
        <Picker>
          <PickerItem label="1992" />
        </Picker>
      </View>
    </View>
    <Button onPress={() => navigation.navigate('MainArea') } title="Próximo" />
  </View>
);

export default WelcomeScreen;
