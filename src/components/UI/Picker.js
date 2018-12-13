import React from 'react';
import { Picker } from 'react-native';

const StyledPicker = ({ children, ...rest }) => (
  <Picker style={{ height: 50, width: 100 }} {...rest}>
    {children}
  </Picker>
);

export const PickerItem = Picker.Item;
export default StyledPicker;
