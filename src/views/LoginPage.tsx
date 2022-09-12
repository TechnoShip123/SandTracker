/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type UserCredentials = {
  name: string;
  password: string;
};

const storeData = async (value: UserCredentials) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@sandtracker_userCredentials', jsonValue);
  } catch (e) {
    console.error('Failed to store data!');
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(
      '@sandtracker_userCredentials',
    );
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Failed to retrieve data!');
  }
};

// @ts-ignore
const LoginPage = ({navigation}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [nameInput, onnameInput] = useState('');
  const [passwordInput, onPasswordInput] = useState('');

  // ------------------------------------------------------
  const registerUser = (name: string, password: string) => {
    console.debug(
      `Storing credentials (name: ${name}) (password: ${password[0]}****)`,
    );
    const userCredentials = {name, password};
    storeData(userCredentials);
  };

  const attemptLogin = async (name: string, password: string) => {
    await getData().then(storedSecrets => {
      if (storedSecrets == null) {
        return console.warn('Failed to retrieve secrets from storage.');
      }

      if (name === storedSecrets.name && password === storedSecrets.password) {
        console.info('✅ Approved credentials! Redirecting...');
        setIsAuthenticated(true); // this will automatically modify state

        navigation.navigate('Home');
      } else {
        console.info('❌ Invalid credentials.');
        return false;
      }
    });
  };
  // ------------------------------------------------------
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ImageBackground
        style={styles.background}
        source={require('../assets/loginPageBG.png')}>
        {/* Content goes in here: */}
        <Text style={styles.titleText}>Login</Text>

        <Pressable
          style={{position: 'absolute', top: '67%'}}
          onPress={() => attemptLogin(nameInput, passwordInput)}>
          <Text style={{fontSize: 25}}>Sign in</Text>
        </Pressable>

        <Pressable
          style={{position: 'absolute', top: '55%'}}
          onPress={() => registerUser(nameInput, passwordInput)}>
          <Text style={{fontSize: 25}}>Register</Text>
        </Pressable>

        <Text style={{position: 'absolute', top: '30%', left: 50}}>Name:</Text>
        <TextInput
          style={{position: 'absolute', top: '35%'}}
          placeholder="Enter name!"
          onChangeText={_name => onnameInput(_name)}
        />

        <Text style={{position: 'absolute', top: '40%', left: 50}}>
          Password:
        </Text>
        <TextInput
          style={{position: 'absolute', top: '45%'}}
          placeholder="Enter Password!"
          onChangeText={_password => onPasswordInput(_password)}
          secureTextEntry={true}
        />
      </ImageBackground>
    </>
  );
};

// STYLES ----------------------------------------------------------

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '50%',
    top: '-40%',
    height: 70,
    backgroundColor: '#BAD0F2',
    borderRadius: 20,

    //random shadow stuff
    shadowColor: '#ffffff',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    fontSize: 200,
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#BAD0F2',
  },
  titleText: {
    color: 'white',
    fontSize: 50,
    position: 'absolute',
    top: 80,
    fontFamily: 'Helvetica-Bold',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default LoginPage;
