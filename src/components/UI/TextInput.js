import React from 'react';
import styled from 'styled-components/native';
import { TextInput, View } from 'react-native';

const StyledTextInput = ({ style }) => (
  <View style={style}>
    <TextInput />
  </View>
);

export default styled(StyledTextInput)`
  border-width: 1;
  border-radius: 5;
  border-color: blue;
  padding-horizontal: 7px;
  padding-vertical: 5px;
`;
