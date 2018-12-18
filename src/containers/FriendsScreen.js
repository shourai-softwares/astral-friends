import React from 'react';
import { FlatList, View } from 'react-native';
import UserPortrait from '../components/UserPortrait';

const friends = [
  'a',
  'b',
  'c',
  'd',
  'e',
];

const FriendsScreen = () => (
  <View>
    <FlatList
      data={friends}
      columnWrapperStyle={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}
      keyExtractor={item => item}
      numColumns={3}
      renderItem={(friend) => (
        <View style={{ margin: 5 }}>
          <UserPortrait user={friend} />
        </View>
      )}
    />
  </View>
);

export default FriendsScreen;
