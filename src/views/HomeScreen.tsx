/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';

// @ts-ignore
const HomeScreen = ({navigation}) => {
  const createInvalidDayAlert = () =>
    Alert.alert("Can't navigate there!", "Sorry, you can't time travel!");

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <ImageBackground
        style={styles.background}
        source={require('../assets/DashBG.png')}>
        <Text style={styles.titleText}>Welcome to Sand Tracker!</Text>

        {/* dates */}
        <TouchableOpacity
          style={{position: 'absolute', left: 60, top: '23.5%'}}
          onPress={() => navigation.navigate('DailyTracker', {day: 'Monday'})}>
          <Image source={require('../assets/icons/1.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', left: 100, top: '23.5%'}}
          onPress={() => navigation.navigate('DailyTracker', {day: 'Tuesday'})}>
          <Image source={require('../assets/icons/2.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', left: 140, top: '23.5%'}}
          onPress={() =>
            navigation.navigate('DailyTracker', {day: 'Wednsday'})
          }>
          <Image source={require('../assets/icons/3.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', left: 180, top: '23.5%'}}
          onPress={() =>
            navigation.navigate('DailyTracker', {day: 'Thursday'})
          }>
          <Image source={require('../assets/icons/4.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', left: 220, top: '23.5%'}}
          onPress={() => navigation.navigate('DailyTracker', {day: 'Friday'})}>
          <Image source={require('../assets/icons/7.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', left: 260, top: '23.5%'}}
          onPress={() => createInvalidDayAlert}>
          <Image source={require('../assets/icons/5.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', left: 300, top: '23.5%'}}
          onPress={() => createInvalidDayAlert}>
          <Image source={require('../assets/icons/6.png')} />
        </TouchableOpacity>
        {/* dates ending */}

        {/* tracker icons */}
        {/* ROW 1 */}
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '47%',
            left: '16%',

            alignContent: 'center',
            width: '50%',
          }}
          onPress={() => null}>
          <Text style={{fontSize: 12}}>Heart Rate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '47%',
            left: '46%',

            alignContent: 'center',
            width: '50%',
          }}
          onPress={() => null}>
          <Text style={{fontSize: 12}}>Steps</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '47%',
            left: '74%',

            alignContent: 'center',
            width: '50%',
          }}
          onPress={() => null}>
          <Text style={{fontSize: 12}}>Sleep Hours</Text>
        </TouchableOpacity>

        {/* ROW 2 */}

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '51.5%',
            left: '16%',

            alignContent: 'center',
            width: '50%',
          }}
          onPress={() => null}>
          <Text style={{fontSize: 12}}>Sleep Quality</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '51.5%',
            left: '46%',

            alignContent: 'center',
            width: '50%',
          }}
          onPress={() => null}>
          {/* on press toggle certain image in array */}
          <Text style={{fontSize: 12}}>Calories</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '51.5%',
            left: '76%',

            alignContent: 'center',
            width: '50%',
          }}
          onPress={() => null}>
          <Text style={{fontSize: 12}}>Mood</Text>
        </TouchableOpacity>

        {/* ROW 3 */}

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '56.4%',
            left: '16%',

            alignContent: 'center',
            width: '50%',
          }}
          onPress={() => null}>
          <Text style={{fontSize: 12}}>Happiness</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: '56.4%',
            left: '46%',

            alignContent: 'center',
            width: '50%',
          }}
          onPress={() => null}>
          <Text style={{fontSize: 12}}>Overall</Text>
        </TouchableOpacity>

        {/* default graph */}
        <Image
          source={require('../assets/HeartRateGraph.png')}
          style={{height: 300, width: '100%'}}
        />

        {/* end of tracker icons */}

        <Text style={{position: 'absolute', top: '20%', left: 35}}>
          {' '}
          Here's your progress this week{' '}
        </Text>

        {/* NAVBAR ICONS ------------------------------- */}

        <TouchableOpacity
          style={{position: 'absolute', left: 50, top: '95%'}}
          onPress={() => null}>
          <Image source={require('../assets/icons/Calendar.png')} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{position: 'absolute', top: '95%'}}
          onPress={() => navigation.navigate('DailyTracker')}>
          <Image source={require('../assets/icons/Alarm.png')} />
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
    fontSize: 35,
    position: 'absolute',
    top: 80,
    left: 30,
    fontFamily: 'Helvetica-Bold',
  },
  button: {},
});

export default HomeScreen;
