import React from 'react';
import { Image, View, Text } from 'react-native';
import { SIGN_IMAGES } from '../assets';

const MapScreen = () => (
  <View style={{ padding: 10 }}>
    <View style={{ flexDirection: 'row' }}>
      <View style={{ borderColor: 'orange', borderWidth: 1, flexGrow: 1, alignItems: 'center' }}>
        <Text>Meu Mapa</Text>
      </View>
      <View style={{ backgroundColor: 'orange', borderColor: 'orange', borderWidth: 1, alignItems: 'center', flexGrow: 1 }}>
        <Text>Meus Amigos</Text>
      </View>
    </View>
    <View style={{ alignItems: 'center', marginTop: 10 }}>
      <View>
        <Image source={SIGN_IMAGES.VIRGIN} style={{ width: 200, height: 200 }} />
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <View>
          <Text>Lua</Text>
          <Image source={SIGN_IMAGES.SCORPIO} style={{ width: 100, height: 100 }} />
        </View>
        <View>
          <Text>Vênus</Text>
          <Image source={SIGN_IMAGES.TWINS} style={{ width: 100, height: 100 }} />
        </View>
        <View>
          <Text>Marte</Text>
          <Image source={SIGN_IMAGES.LION} style={{ width: 100, height: 100 }} />
        </View>
        <View>
          <Text>Clique em qualquer astro para mais informações</Text>
          <Text>GRANDE TEXTO RESUMO DO MAPA</Text>
        </View>
      </View>
    </View>
  </View>
);

export default MapScreen;
