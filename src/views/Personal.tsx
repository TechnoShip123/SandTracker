/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Pressable,
} from 'react-native';
import * as Utils from '../utils';

const saveChanges = async (personalLogData: object) => {
  const storageKey = '@sandtracker_personal';
  Utils.storeData(storageKey, personalLogData);
};

// const loadChanges = async (dataToStore: object) => {
//   const storageKey = '@sandtracker_personal';
//   await Utils.getData(storageKey).then(personalLogData => {
//     return personalLogData ?? console.warn('Failed to retrieve sleep log data from storage.');
//   });
// };

// @ts-ignore
const Personal = ({navigation}) => {
    const [name, onNameChange] = useState('');
    // TODO: enforce numerical input?
    const [age, onAgeChange] = useState('');
    const [gender, onGenderChange] = useState('');
    const [height, onHeightChange] = useState('');
    const [weight, onWeightChange] = useState('');
    const [goals, onGoalsChange] = useState('');


  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/PersonalInfo.png')}>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />

      <Text style={styles.titleText}>Personal Info</Text>

      <Text
        style={{position: 'absolute', top: '19%', left: '45%', fontSize: 20}}>
        Name
      </Text>
      <TextInput
        style={{position: 'absolute', top: '24%', left: '40%', backgroundColor:'#ECECEC',padding: 10}}
        placeholder="Enter Name!"
        onChangeText={onNameChange}
      />

      <Text
        style={{position: 'absolute', top: '29%', left: '23%', fontSize: 20}}>
        Age
      </Text>
      <TextInput
        style={{position: 'absolute', top: '34%', left: '18%', backgroundColor:'#ECECEC',padding: 10}}
        placeholder="Enter Age"
        onChangeText={onAgeChange}
      />

      <Text
        style={{position: 'absolute', top: '29%', left: '65%', fontSize: 20}}>
        Gender
      </Text>
      <TextInput
        style={{position: 'absolute', top: '34%', left: '60%', backgroundColor:'#ECECEC',padding: 10}}
        placeholder="Enter Gender"
        onChangeText={onGenderChange}
      />

      <Text
        style={{position: 'absolute', top: '39%', left: '19%', fontSize: 20}}>
        Weight
      </Text>
      <TextInput
        style={{position: 'absolute', top: '44%', left:'13%',backgroundColor:'#ECECEC',padding: 10}}
        placeholder="Enter Weight (lbs)"
        onChangeText={onWeightChange}
      />

      <Text
        style={{position: 'absolute', top: '39%', left: '65%', fontSize: 20}}>
        Height
      </Text>
      <TextInput
        style={{position: 'absolute', top: '44%', left: '55%', backgroundColor:'#ECECEC',padding: 10}}
        placeholder="Enter Height (cm)"
        onChangeText={onHeightChange}
      />

      <Text style = {{position: 'absolute', top: '53%', fontSize: 20}}>¡Personal Goals!</Text>
      <TextInput
        style={{position: 'absolute', top: '60%', left: '12%', backgroundColor:'#EEEEEE', padding: 10, maxWidth: '79%'}}
        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        onChangeText={onGoalsChange}
        multiline = {true}
        numberOfLines = {8}
      />

      <TouchableOpacity
        style={{position: 'absolute', left: 50, top: '95%'}}
        onPress={() => navigation.navigate('Home')}>
        <Image source={require('../assets/icons/calendarBlack.png')} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', top: '95%'}}
        onPress={() => navigation.navigate('DailyTracker')}>
        <Image source={require('../assets/icons/Alarm.png')} />
      </TouchableOpacity>

      <TouchableOpacity
        style={{position: 'absolute', right: 50, top: '95%'}}
        onPress={() => null}>
        <Image source={require('../assets/icons/settingsPurple.png')} />
      </TouchableOpacity>

      <Pressable
          style={{position: 'absolute', top: '70%', backgroundColor:'#add8e6', borderRadius: 9, paddingHorizontal: 10, paddingVertical: 2.5}}
          onPress={() => saveChanges({
            name: name,
            age: age,
            gender: gender,
            height: height,
            weight: weight,
            goals: goals,
          })}>
          <Text style={{fontSize: 25, color: 'white'}}>Save</Text>
      </Pressable>

    </ImageBackground>
  );
};

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
    fontSize: 200,
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#BAD0F2',
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    top: '10%',
    position: 'absolute',
    textAlign: 'center',
    fontFamily: 'Helvetica-Bold',
  },
});

export default Personal;
