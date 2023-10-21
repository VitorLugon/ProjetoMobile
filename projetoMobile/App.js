
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from './src/pages/HomePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='LoginPage' component={LoginPage}/>
        <Stack.Screen name='RegisterPage' component={RegisterPage}/>
        <Stack.Screen name='ForgotPasswordPage' component={ForgotPasswordPage}/>
        <Stack.Screen name='HomePage' component={HomePage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a6f2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
