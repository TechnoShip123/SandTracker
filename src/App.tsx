import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPage from './views/LoginPage';
import HomeScreen from './views/HomeScreen';
import Personal from './views/Personal';
import TrackerView from './views/DailyTracker';
import HealthLogger from './views/HealthLogger';
import MoodLogger from './views/MoodLogger';
import SleepLog from './views/SleepLogger';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DailyTracker"
          component={TrackerView}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Personal"
          component={Personal}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="HealthLogger"
          component={HealthLogger}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MoodLogger"
          component={MoodLogger}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SleepLogger"
          component={SleepLog}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
