// TODO: PLZ FIX ME AAAAAA

/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Pressable,
} from 'react-native';

import * as Utils from '../utils';

const saveChanges = async (moodLogData: object) => {
  const storageKey = '@sandtracker_moodLogger';
  Utils.storeData(storageKey, moodLogData);
};

const loadChanges = async (dataToStore: object) => {
  const storageKey = '@sandtracker_moodLogger';
  await Utils.getData(storageKey).then(moodLogData => {
    return (
      moodLogData ??
      console.warn('Failed to retrieve mood log data from storage.')
    );
  });
};

const MoodLogger = ({navigation}) => {
  const [mood, setMoodChange] = useState('');
  const [overall, setOverallChange] = useState('');
  const [notes, setNotesChange] = useState('');

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ImageBackground
        style={styles.background}
        source={require('../assets/SleepBG.png')}>
        {/* Content goes in here: */}
        <Text style={styles.titleText}>July 21, 2022</Text>
        <Text style={styles.dayText}>Thursday</Text>

        <Text
          style={{
            position: 'absolute',
            top: '20%',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Mood
        </Text>

        <TextInput
          style={{
            position: 'absolute',
            top: '25%',
            left: '25%',
            padding: 10,
            minWidth: 100,
            backgroundColor: '#ececec',
          }}
          placeholder="Type here..."
          onChangeText={setMoodChange}
        />

        <Text
          style={{
            position: 'absolute',
            top: '35%',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Happy?
        </Text>

        <TouchableOpacity
          style={{position: 'absolute', left: '25%', top: '50%'}}
          onPress={() => {}}>
          <Image source={require('../assets/icons/emojiCrying.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', right: '25%', top: '50%'}}
          onPress={() => {}}>
          <Image source={require('../assets/icons/emojiHappy.png')} />
        </TouchableOpacity>

        <Text
          style={{
            position: 'absolute',
            top: '50%',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Overall
        </Text>

        <TextInput
          style={{
            position: 'absolute',
            top: '55%',
            left: '25%',
            minWidth: 100,
            padding: 10,
            backgroundColor: '#ececec',
          }}
          placeholder="Type here..."
          onChangeText={setOverallChange}
        />

        <Text>Thoughts/Feelings</Text>
        <TextInput
          style={{
            position: 'absolute',
            top: '65%',
            left: '25%',
            padding: 10,
            backgroundColor: '#ececec',
            height: 70,
            width: 200,
          }}
          placeholder="Type here..."
          onChangeText={setNotesChange}
        />

        <Pressable
          style={{
            position: 'absolute',
            top: '80%',
            alignContent: 'center',
            width: '50%',
          }}
          onPress={() =>
            saveChanges({
              maxHeartRate: maxHeartRate,
              calories: calories,
              steps: steps,
              notes: notes,
            })
          }>
          <Text style={{fontSize: 25, color: 'white'}}>Add</Text>
        </Pressable>

        <TouchableOpacity
          style={{position: 'absolute', right: 50, top: '5%'}}
          onPress={() => navigation.navigate('DailyTracker')}>
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
    fontSize: 50,
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
  heart: {
    color: 'black',
    fontSize: 35,
    position: 'absolute',
    top: '10%',
    fontFamily: 'Helvetica',
  },
  bpm: {
    color: 'black',
  },
  cal: {},
  steps: {},
  sleep: {},
  container: {},
});

export default MoodLogger;
