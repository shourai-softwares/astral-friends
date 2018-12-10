import React from 'react';
import { Picker } from 'react-native';

const StyledPicker = ({ children }) => (
  <Picker style={{ height: 50, width: 100 }}>
    {children}
  </Picker>
);

export const PickerItem = Picker.Item;
export default StyledPicker;
