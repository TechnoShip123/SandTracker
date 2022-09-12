/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useState } from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, Pressable, TouchableOpacity, Image, TextInput, View} from 'react-native';
import * as Utils from '../utils';

const saveChanges = async (sleepLogData: object) => {
  const storageKey = '@sandtracker_sleepLogger';
  Utils.storeData(storageKey, sleepLogData);
};

const loadChanges = async (dataToStore: object) => {
  const storageKey = '@sandtracker_sleepLogger';
  await Utils.getData(storageKey).then(sleepLogData => {
    return sleepLogData ?? console.warn('Failed to retrieve sleep log data from storage.');
  });
};

// @ts-ignore
const SleepLog = ({route, navigation}) => {
  const [notes, onNotesChange] = useState('');
  const [hoursSlept, onHoursSleptChange] = useState('');

  const { day, date } = route.params;


  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ImageBackground
        style={styles.background}
        source={require('../assets/SleepBG.png')}>
        {/* Content goes in here: */}
        <Text style={styles.titleText}>July {date}, 2022</Text>
        <Text style={styles.dayText}>{day}</Text>
        <Text style={styles.sleep}>Sleep</Text>

        <Text style = {{position: 'absolute', top:'30%'}}>How long did you sleep (in hrs)?</Text>
        <TextInput
          style={{position: 'absolute', top: '24%', left: '40%', backgroundColor:'#ECECEC',padding: 10}}
          placeholder="Enter Hours"
          onChangeText={onHoursSleptChange}
        />

        <Text>Extra Notes</Text>
        <TextInput
          style={{position: 'absolute', top: '24%', left: '40%', backgroundColor:'#ECECEC',padding: 10}}
          placeholder="Enter Notes"
          onChangeText={onNotesChange}
        />

        <Pressable
          style={{position: 'absolute', top: '80%', alignContent: 'center', width:'50%'}}
          onPress={() => saveChanges({'notes': notes, 'hoursSlept': hoursSlept})}>
          <Text style={{fontSize: 25, color: 'white'}}>Add</Text>
        </Pressable>


        <Text>How would you rate your sleep?</Text>
      {/* these are for emojis */}
        <TouchableOpacity
          style={{position: 'absolute', left: '25%', top: '50%'}}
          onPress={() => {}}>
          <Image source={require('../assets/icons/emojiangry.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', right: '25%', top: '50%'}}
          onPress={() => {}}>
          <Image source={require('../assets/icons/emojiHappy.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', alignContent: 'center', top: '50%%'}}
          onPress={() => {}}>
          <Image source={require('../assets/icons/emojimid.png')} />
        </TouchableOpacity>

        {/* back button */}
        <TouchableOpacity
          style={{position: 'absolute', left: 50, top: '5%'}}
          onPress={() => {}}>
          <Image source={require('../assets/icons/backButton.png')} />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    color: 'black',
    fontSize: 30,
    position: 'absolute',
    top: 80,
    fontFamily: 'Helvetica-Bold',
  },
  dayText: {
    color: '#4385E8',
    fontSize: 25,
    position: 'absolute',
    fontFamily: 'Helvetica-Bold',
  },
  sleep: {
    color: 'black',
    fontSize: 35,
    position: 'absolute',
    top: 80,
    fontFamily: 'Helvetica',
  },
});

export default SleepLog;
