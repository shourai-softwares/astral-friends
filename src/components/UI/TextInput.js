import React from 'react';
import styled from 'styled-components/native';
import { TextInput, View } from 'react-native';

const StyledTextInput = ({ style, ...rest }) => (
  <View style={style}>
    <TextInput {...rest} />
  </View>
);

export default styled(StyledTextInput)`
  border-width: 1;
  border-radius: 5;
  border-color: blue;
  padding-horizontal: 7px;
  padding-vertical: 5px;
`;
