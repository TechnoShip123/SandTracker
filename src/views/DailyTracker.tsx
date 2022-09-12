/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Util from '../utils';

// @ts-ignore
const TrackerView = ({route, navigation}) => {
  const [savedHealthInfo, updateSavedHealthInfo] = useState({
    maxHeartRate: String,
    calories: String,
    steps: String,
    notes: String,
  });
  const {day} = route?.params ?? 'day';

  const retrieveHealthData = async () => {
    await Util.getData('@sandtracker_healthLogger').then(localData => {
      if (localData == null) {
        return console.warn('Failed to retrieve health data.');
      }

      updateSavedHealthInfo(localData);
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ImageBackground
        style={styles.background}
        source={require('../assets/DailyTrackerBG.png')}>
        {/* Content goes in here: */}
        <Text style={styles.titleText}>Daily Tracker</Text>
        <Text style={styles.dateStyle}>{day}</Text>
        <Text style={styles.healthTracker}>Health</Text>
        {/* when u click the circles (which will have logger data in them) it should navigate to health logger */}
        <TouchableOpacity
          style={styles.healthTracker}
          onPress={() => navigation.navigate('HealthLogger')}>
          <Text>120 bpm</Text>
          <Text>1000 steps</Text>
          <Text>2000 cal</Text>
        </TouchableOpacity>

        <Text style={styles.moodTracker}>How do you feel today?</Text>
        {/* when u click the circles (which will have logger data in them) it should navigate to mood logger */}
        <TouchableOpacity
          style={styles.moodTracker}
          onPress={() => navigation.navigate('MoodLogger')}>
          <Text>Happy</Text>
          <Image source={require('../assets/icons/emojiHappy.png')} />
          <Text>Delighted</Text>
        </TouchableOpacity>

        <Text style={styles.sleepTracker}>Sleep</Text>
        {/* when u click the circles (which will have logger data in them) it should navigate to mood logger */}
        <TouchableOpacity
          style={styles.moodTracker}
          onPress={() => navigation.navigate('SleepLogger')}>
          <Text>8 hrs</Text>
          <Image />
          {/* sleep icon here*/}
        </TouchableOpacity>

        <Text style={styles.thoughtsTracker}>Thoughts/Feelings</Text>
        {/* when u click the circles (which will have logger data in them) it should navigate to mood logger */}
        <Text style={styles.thoughts}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          voluptate iusto culpa officiis doloribus asperiores sapiente
          repudiandae beatae architecto iste itaque, mollitia provident
          voluptatibus adipisci quisquam ab, unde sint facere?
        </Text>

        <TouchableOpacity
          style={{position: 'absolute', left: 50, top: '95%'}}
          onPress={() => null}>
          <Image source={require('../assets/icons/Calendar.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', top: '95%'}}
          onPress={() => navigation.navigate('DailyTracker')}>
          <Image source={require('../assets/icons/AlarmPurple.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', right: 50, top: '95%'}}
          onPress={() => navigation.navigate('Personal')}>
          <Image source={require('../assets/icons/settings.png')} />
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
    top: 70,
    fontFamily: 'Helvetica-Bold',
  },
  dateStyle: {
    color: '#4385E8',
    fontSize: 30,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'lowercase',
    letterSpacing: 8,
    top: -550,
  },
  thoughts: {
    top: -120,
    width: 300,
  },

  //positions
  healthTracker: {
    fontWeight: 'bold',
    color: 'black',
    top: -490,
    fontSize: 25,
    fontFamily: 'Helvetica',
  },
  moodTracker: {
    fontWeight: 'bold',
    color: 'black',
    top: -390,
    fontSize: 25,
    fontFamily: 'Helvetica',
  },
  sleepTracker: {
    fontWeight: 'bold',
    color: 'black',
    top: -270,
    fontSize: 25,
    fontFamily: 'Helvetica',
  },
  thoughtsTracker: {
    fontWeight: 'bold',
    color: 'black',
    top: -150,
    fontSize: 25,
    fontFamily: 'Helvetica',
  },
});

export default TrackerView;
