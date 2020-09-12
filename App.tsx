import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import { RootStackParamList } from './src/types/navigation';
import CreateScreen from './src/screens/CreateScreen';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Index'>
          <Stack.Screen
            name='Index'
            component={IndexScreen}
            options={{
              title: 'RN Blog',
            }}
          />
          <Stack.Screen name='Show' component={ShowScreen} />
          <Stack.Screen name='Create' component={CreateScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
};

export default App;
