import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { SIGN_IMAGES } from '../assets';

const RoundImage = styled.Image`
  border-radius: 50;
  overflow: hidden;
`;

const UserPortrait = ({ style }) => (
  <View style={style}>
    <RoundImage
      style={{ width: 100, height: 100 }}
      source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' }}
    />
    <RoundImage
      style={{ position: 'absolute', width: 30, height: 30 }}
      source={SIGN_IMAGES.SCORPIO}
    />
    <View style={{ flexGrow: 1, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)', padding: 3 }}>
      <Text style={{ color: 'white' }}>jajajaj</Text>
    </View>
  </View>
);
UserPortrait.propType = {
  style: PropTypes.object,
};

export default UserPortrait;
