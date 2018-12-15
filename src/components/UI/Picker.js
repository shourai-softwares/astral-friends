import React from 'react';
import { Picker } from 'react-native';

const StyledPicker = ({ children, ...rest }) => (
  <Picker style={{ height: 50, width: 120 }} {...rest}>
    {children}
  </Picker>
);

export const PickerItem = Picker.Item;
export default StyledPicker;
