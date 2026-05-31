import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from '../screens/AddTodo/index';
import Routes from '../screens/Routes';
import { RootStackParamList } from './types';
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Routes.TO_DO} component={Screens.Todo} />
        <Stack.Screen name={Routes.ADD_TO_DO} component={Screens.AddTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
