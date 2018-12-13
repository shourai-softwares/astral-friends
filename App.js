import React from 'react';
import Base from './src/Base';
import { UserProvider } from './src/UserContext';

const App = () => (
  <UserProvider>
    <Base />
  </UserProvider>
);

export default App;
