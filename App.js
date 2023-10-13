import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, Image, TextInput, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Homepage';
import { Alert } from 'react-native';
import Tab from './Tab';
import FlatList from './FlatList';
import FlatList2 from './FlatList2';
import FlatList3 from './FlatList3';
import FlatList4 from './FlatList4';
import DrawerNavigator from './DrawerNavigator';
import Survey from './Survey';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInRegister">
        <Stack.Screen name="SignInRegister" component={SignInRegisterScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Images" component={Tab} />
        <Stack.Screen name="Details" component={FlatList} />
        <Stack.Screen name="Garden" component={FlatList2} />
        <Stack.Screen name="Travel" component={FlatList3} />
        <Stack.Screen name="Seleno" component={FlatList4} />
        <Stack.Screen name="Settings" component={ DrawerNavigator} />
        <Stack.Screen name="Survey" component={Survey} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SignInRegisterScreen({ navigation }) {
  const [isRegisterMode, setIsRegisterMode] = useState(true);

  const toggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  const handleSignInOrRegister = () => {
    
    navigation.navigate('Home');
  };

  Alert.alert(
    'Sign In/Register Alert',
    `You clicked the "${isRegisterMode ? 'Register' : 'Sign In'}" button.`,
    [
      {
        text: 'WELCOME',
        onPress: () => {
          if (!isRegisterMode) {

            navigation.navigate('Home');
          }
        },
      },
    ]
  )
  return (
    <View style={styles.container}>
      <Text style={styles.Signin}>{isRegisterMode ? 'REGISTER' : 'SIGN IN'}</Text>
      <StatusBar style="auto" />
      <Image source={require('./assets/bouqet.webp')} style={{ height: 150, width: 150 }} />
      <TextInput style={styles.input} placeholder='Username' placeholderTextColor='gray' />
      <TextInput style={styles.input} placeholder='Email' placeholderTextColor='gray' />
      <TextInput style={styles.input} placeholder='Password' placeholderTextColor='gray' />
      <Text style={styles.forgot}>
        {isRegisterMode
          ? "Already have an Account? Click here to "
          : "Don't have an Account? Click here to "}
        <Text style={styles.span} onPress={toggleMode}>
          {isRegisterMode ? 'Sign In!' : 'Register!'}
        </Text>
      </Text>
      <View style={styles.button}>
        <Button title={isRegisterMode ? 'Register' : 'Sign In'} onPress={handleSignInOrRegister} color='black' />
      </View>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 50,
    margin: 50,
    marginBottom: 50,
  },
  Signin: {
    color: 'black',
    letterSpacing: 10,
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    height: 50,

  },
  input: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginTop: 15,
    width: 300,
    height: 30,
  },
  button: {
    marginTop: 50,
  },
  forgot: {
    color: 'black',
    fontSize: 12,
    alignItems: 'center',
    marginTop: 15,
  },
  span: {
    color: '#4c00b4',
  },
});
