import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styled from 'styled-components';

const Card = ({ children, style }) => (
  <View style={style}>
    {children}
  </View>
);
Card.proptypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

export default styled(Card)`
  align-items: center;
  background-color: #52e649;
  border-color: #11a90f;
  border-width: 2;
  border-radius: 10;
  justify-content: center;
  min-height: 80;
  padding: 10px;
`;
