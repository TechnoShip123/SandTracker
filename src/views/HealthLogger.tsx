/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import * as Utils from '../utils';

const saveChanges = async (healthLogData: object) => {
  const storageKey = '@sandtracker_healthLogger';
  Utils.storeData(storageKey, healthLogData);
};

// @ts-ignore
const HealthLogger = ({navigation}) => {
  const [maxHeartRate, onMaxHeartRateChange] = useState('');
  const [calories, onCaloriesChange] = useState('');
  const [steps, onStepsChange] = useState('');
  const [notes, onNotesChange] = useState('');

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
          Max Heart Rate
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
          onChangeText={onMaxHeartRateChange}
        />
        <Text
          style={{
            position: 'absolute',
            color: '',
            top: '25%',
            left: '55%',
            padding: 10,
            backgroundColor: '#ececec',
          }}>
          bpm
        </Text>

        <Text
          style={{
            position: 'absolute',
            top: '32%',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Calories
        </Text>

        <TextInput
          style={{
            position: 'absolute',
            top: '37%',
            left: '25%',
            padding: 10,
            minWidth: 100,
            backgroundColor: '#ececec',
          }}
          placeholder="Type here..."
          onChangeText={onCaloriesChange}
        />
        <Text
          style={{
            position: 'absolute',
            top: '37%',
            left: '55%',
            padding: 10,
            backgroundColor: '#ececec',
          }}>
          cal
        </Text>

        <Text
          style={{
            position: 'absolute',
            top: '45%',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Steps
        </Text>

        <TextInput
          style={{
            position: 'absolute',
            top: '50%',
            left: '25%',
            minWidth: 100,
            padding: 10,
            backgroundColor: '#ececec',
          }}
          placeholder="Type here..."
          onChangeText={onStepsChange}
        />
        <Text
          style={{
            position: 'absolute',
            top: '50%',
            left: '55%',
            padding: 10,
            backgroundColor: '#ececec',
          }}>
          steps
        </Text>

        <Text
          style={{
            position: 'absolute',
            top: '57%',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Thoughts/Feelings
        </Text>

        <TextInput
          style={{
            position: 'absolute',
            top: '62%',
            left: '25%',
            padding: 10,
            backgroundColor: '#ececec',
            height: 70,
            width: 200,
          }}
          placeholder="Type here..."
          onChangeText={onNotesChange}
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
          <Text style={{fontSize: 25, color: 'white', textAlign: 'center'}}>
            Add
          </Text>
        </Pressable>

        <TouchableOpacity
          style={{position: 'absolute', right: 50, top: '5%'}}
          onPress={() => navigation.navigate('Home')}>
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

export default HealthLogger;
