import React from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View, Text } from 'react-native';
import styled from 'styled-components/native';

const UserPortrait = ({ style }) => (
  <View style={style}>
    <ImageBackground
      style={{ flexDirection:'row', alignItems: 'flex-end', width: '100%', height: '100%' }}
      source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png' }}
    >
      <View style={{ flexGrow: 1, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)', padding: 3 }}>
        <Text style={{ color: 'white' }}>jajajaj</Text>
      </View>
    </ImageBackground>
  </View>
);
UserPortrait.propType = {
  style: PropTypes.object,
};

export default styled(UserPortrait)`
  overflow: hidden;
  width: 100;
  height: 100;
  border-radius: 50;
  border-color: black;
  border-width: 1;
`;
