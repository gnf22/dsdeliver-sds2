import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/Home';
import Orders from '../pages/Orders';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#FFF',
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
