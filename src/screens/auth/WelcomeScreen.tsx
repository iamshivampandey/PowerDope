import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BALCK_COLOR, PD_THEME_COLOR, WHITE_COLOR} from '../../utils/colors';
import FastImage from 'react-native-fast-image';
import {
  adminid_image,
  google_image,
  numberpad_image,
  onBoardingBgImage,
  outlook_image,
  powerdopLogo,
} from '../../utils/images';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils';
import TextInputComponent from '../../component/TextInputComponent';
import LinearGradient from 'react-native-linear-gradient';
import {scale, moderateVerticalScale} from 'react-native-size-matters';

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
  const gradientColor = ['#00000000', '#000000'];
  return (
    <View style={styles.container}>
      <ImageBackground
        style={[
          styles.bgImage,
          {display: isRegisterSelected ? 'none' : 'flex'},
        ]}
        source={onBoardingBgImage}>
        <LinearGradient
          colors={gradientColor}
          style={styles.gradient}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
        />
        <LinearGradient
          colors={gradientColor}
          style={styles.gradient}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1.2}}
        />
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
      <View style={styles.socialContainer}>
        <View style={styles.socialSubContainer}>
          <TouchableOpacity style={styles.socialButtonView} onPress={() => {}}>
            <FastImage source={outlook_image} style={styles.outlookIcon} />
          </TouchableOpacity>
          <Text style={styles.socialLoginText}>outlook</Text>
        </View>
        <View style={styles.googleSubContainer}>
          <TouchableOpacity style={styles.googleView} onPress={() => []}>
            <FastImage source={google_image} style={styles.googleIcon} />
          </TouchableOpacity>
          <Text style={styles.socialLoginText}>Google</Text>
        </View>
        <View style={styles.googleSubContainer}>
          <TouchableOpacity style={styles.googleView} onPress={() => []}>
            <FastImage source={numberpad_image} style={styles.googleIcon} />
          </TouchableOpacity>
          <Text style={styles.socialLoginText}>Number</Text>
        </View>
        <View style={styles.socialSubContainer}>
          <TouchableOpacity style={styles.socialButtonView} onPress={() => []}>
            <FastImage source={adminid_image} style={styles.outlookIcon} />
          </TouchableOpacity>
          <Text style={styles.socialLoginText}>Admin Id</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BALCK_COLOR,
    paddingTop: moderateVerticalScale(50),
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
    marginTop: moderateVerticalScale(35),
    marginBottom: 20,
    height: moderateVerticalScale(350),
  },
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    width: '60%',
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
  bgImage: {
    width: '100%',
    height: moderateVerticalScale(520),
    position: 'absolute',
    top: moderateVerticalScale(100),
    bottom: 0,
    margin: 'auto',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  socialButtonView: {},
  googleView: {
    width: 26,
    height: 26,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialLoginText: {
    color: WHITE_COLOR,
    fontWeight: '500',
    fontSize: 8,
  },
  socialSubContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleSubContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: moderateVerticalScale(48),
    width: scale(38),
    gap: 7,
  },
  outlookIcon: {width: 38, height: 38},
  googleIcon: {width: 18, height: 18},
});

export default WelcomeScreen;
