import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BALCK_COLOR, PD_THEME_COLOR, WHITE_COLOR} from '../../utils/colors';
import FastImage from 'react-native-fast-image';
import {onBoardingBgImage, powerdopLogo} from '../../utils/images';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils';
import TextInputComponent from '../../component/TextInputComponent';
import LinearGradient from 'react-native-linear-gradient';
import {Poppins_Regular} from '../../utils/fonts';

const WelcomeScreen = ({navigation}) => {
  const [isLoginSelected, setIsLoginSelected] = useState(true);
  const [isRegisterSelected, setRegisterSelected] = useState(false);

  const switchToLogin = () => {
    setIsLoginSelected(true);
    setRegisterSelected(false);
  };

  const switchToRegister = () => {
    setIsLoginSelected(false);
    setRegisterSelected(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={{
          width: '100%',
          height: '90%',
          position: 'absolute',
          bottom: 100,
          display: isRegisterSelected ? 'none' : 'flex',
        }}
        source={onBoardingBgImage}>
        <LinearGradient
          colors={['#00000000', '#000000']}
          style={styles.gradient}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}></LinearGradient>
      </ImageBackground>
      <View style={styles.logoView}>
        <FastImage source={powerdopLogo} style={styles.pdLogo} />
        <Text style={styles.headerText}>
          Welcome to <Text style={styles.pdText}>PowerDope</Text>
        </Text>
      </View>

      <View style={styles.inputsArea}>
        {isRegisterSelected && (
          <>
            <TextInputComponent
              fieldNameText={'Name'}
              onTextInput={text => {}}
            />
            <TextInputComponent
              fieldNameText={'NUMBER'}
              onTextInput={text => {}}
            />
            <TextInputComponent
              fieldNameText={'PASSWORD'}
              onTextInput={text => {}}
            />
            <TextInputComponent
              fieldNameText={'RE-TYPE PASSWORD'}
              onTextInput={text => {}}
            />
            <TextInputComponent
              fieldNameText={'AGE'}
              onTextInput={text => {}}
            />
          </>
        )}
      </View>

      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[styles.button, isLoginSelected ? styles.selected : {}]}
          onPress={switchToLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, isRegisterSelected ? styles.selected : {}]}
          onPress={switchToRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BALCK_COLOR,
  },
  logoView: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    marginTop: 20,
    zIndex: 2,
  },
  pdLogo: {
    width: WINDOW_WIDTH * 0.13,
    height: WINDOW_HEIGHT * 0.06,
  },
  headerText: {
    fontSize: 15,
    fontWeight: '400',
    color: WHITE_COLOR,
  },
  pdText: {
    fontSize: 20,
    fontWeight: '400',
    color: PD_THEME_COLOR,
  },
  inputsArea: {
    width: '80%',
    alignSelf: 'center',
    gap: 30,
    marginTop: WINDOW_HEIGHT * 0.05,
    marginBottom: 20,
    height: WINDOW_HEIGHT * 0.43,
    // backgroundColor:'red'
  },
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    overflow: 'hidden',
    width: '60%',
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: PD_THEME_COLOR,
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  selected: {
    backgroundColor: PD_THEME_COLOR,
  },
  buttonText: {
    color: WHITE_COLOR,
    fontWeight: '600',
    fontSize: 15,
    fontFamily: Poppins_Regular,
  },
  imageLinerGradient: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingHorizontal: 25,
  },
  gradient: {
    height: WINDOW_HEIGHT * 0.4,
    width: '100%',
  },
});

export default WelcomeScreen;
