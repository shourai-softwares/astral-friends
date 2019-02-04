import React, { Fragment } from 'react';
import { Image, View, Text } from 'react-native';
import { SIGN_IMAGES } from '../assets';

const MapShower = () => (
  <Fragment>
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
  </Fragment>
);

export default MapShower;
