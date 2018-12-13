import React, { PureComponent } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { SIGN_IMAGES } from '../assets';
import UserContext from '../UserContext';
import Picker, { PickerItem } from '../components/UI/Picker';
import TextInput from '../components/UI/TextInput';

class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      birthDay: 1,
      birthMonth: 3,
      birthYear: 1990,
    };
  }

  render() {
    const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const months = ['Janeiro', 'Fevereiro', 'Maio', 'Abril', 'Março', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

    let source;
    switch (this.state.birthMonth) {
      case 0:
        source = SIGN_IMAGES.AQUARIUS;
        break;
      case 1:
        source = SIGN_IMAGES.ARIES;
        break;
      case 2:
        source = SIGN_IMAGES.BULL;
        break;
      case 3:
        source = SIGN_IMAGES.CANCER;
        break;
      case 4:
        source = SIGN_IMAGES.CAPRICORN;
        break;
      case 5:
        source = SIGN_IMAGES.CONTACTORS;
        break;
      case 6:
        source = SIGN_IMAGES.FISH;
        break;
      case 7:
        source = SIGN_IMAGES.HORIZONTAL;
        break;
      case 8:
        source = SIGN_IMAGES.LION;
        break;
      case 9:
        source = SIGN_IMAGES.SCORPIO;
        break;
      case 10:
        source = SIGN_IMAGES.TWINS;
        break;
      case 11:
        source = SIGN_IMAGES.VIRGIN;
        break;
    }

    return (
      <View style={{ justifyContent: 'center', flexGrow: 1, margin: 15 }}>
        <Text>Olá, vamos começar com o básico:</Text>
        <View>
          <Text>Nome de Exibição</Text>
          <TextInput
            value={this.state.name}
            onChange={name => this.setState({ name })}
          />
        </View>
        <View>
          <Text>Data de nascimento</Text>
          <View style={{ flexDirection: 'row' }}>
            <Picker value={this.state.birthDay}>
              {days.map((day) => (
                <PickerItem key={day} label={String(day).padStart(2, '0')} value={day} />
              ))}
            </Picker>
            <Picker
              selectedValue={this.state.birthMonth}
              onValueChange={birthMonth => this.setState({ birthMonth })}
            >
              {months.map((month, key) => (
                <PickerItem key={month} label={month} value={key} />
              ))}
            </Picker>
            <Picker>
              <PickerItem label="1992"/>
            </Picker>
          </View>
        </View>
        <View style={{ alignItems: 'center', margin: 10 }}>
          <Image source={source} style={{ height: 150, width: 150, resizeMode: 'contain' }}/>
        </View>
        <Button onPress={() => this.props.navigation.navigate('MainArea')} title="Próximo"/>
      </View>
    );
  }
}

export default WelcomeScreen;
