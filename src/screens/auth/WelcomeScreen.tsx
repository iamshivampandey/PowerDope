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
  back_arrow_ic,
  box_check_ic,
  box_unchecked_ic,
  google_image,
  numberpad_image,
  onBoardingBgImage,
  outlook_image,
  powerdopLogo,
} from '../../utils/images';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../utils';
import TextInputComponent from '../../component/TextInputComponent';
import LinearGradient from 'react-native-linear-gradient';
import {Poppins_Regular} from '../../utils/fonts';
import {scale, moderateVerticalScale} from 'react-native-size-matters';
import VectorImage from 'react-native-vector-image';
import RegistrationConfirm from '../../component/RegistrationConfirm';

const WelcomeScreen = ({navigation}) => {
  const [isLoginSelected, setIsLoginSelected] = useState(true);
  const [isRegisterSelected, setRegisterSelected] = useState(false);
  const [isShowBtoomView, setIsShowBtoomView] = useState(true);
  const [isShowLoginInputs, setIsShowLoginInputs] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const switchToLogin = () => {
    setIsLoginSelected(true);
    setRegisterSelected(false);
  };

  const switchToRegister = () => {
    setIsLoginSelected(false);
    setRegisterSelected(true);
  };

  const onInputFocus = () => {
    setIsShowBtoomView(false);
  };
  const registerConfirm = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const gradientColor = ['#00000000', '#000000'];
  return (
    <View style={styles.container}>
      {isLoginSelected && (
        <ImageBackground style={[styles.bgImage]} source={onBoardingBgImage}>
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
      )}
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
              onInputFocus={onInputFocus}
            />
            <TextInputComponent
              fieldNameText={'NUMBER'}
              onTextInput={text => {}}
              onInputFocus={onInputFocus}
            />
            <TextInputComponent
              fieldNameText={'PASSWORD'}
              onTextInput={text => {}}
              onInputFocus={onInputFocus}
            />
            <TextInputComponent
              fieldNameText={'RE-TYPE PASSWORD'}
              onTextInput={text => {}}
              onInputFocus={onInputFocus}
            />
            <TextInputComponent
              fieldNameText={'AGE'}
              onTextInput={text => {}}
              onInputFocus={onInputFocus}
            />
          </>
        )}
        {isShowLoginInputs && (
          <>
            <TextInputComponent
              fieldNameText={'Account'}
              onTextInput={text => {}}
              onInputFocus={onInputFocus}
            />
            <TextInputComponent
              fieldNameText={'Password'}
              onTextInput={text => {}}
              onInputFocus={onInputFocus}
            />
            <View style={{flexDirection: 'row', gap: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: isRememberMe ? WHITE_COLOR : 'transparent',
                }}
                onPress={() => {
                  setIsRememberMe(prev => !prev);
                }}>
                <VectorImage
                  source={isRememberMe ? box_check_ic : box_unchecked_ic}
                  tintColor={PD_THEME_COLOR}
                />
              </TouchableOpacity>
              <Text style={styles.rememberMeText}>Remember me</Text>
            </View>
          </>
        )}
      </View>

      {isShowBtoomView && (
        <>
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
              <TouchableOpacity
                style={styles.socialButtonView}
                onPress={() => {}}>
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
              <TouchableOpacity
                style={styles.socialButtonView}
                onPress={() => {
                  setIsShowLoginInputs(true);
                  setIsLoginSelected(false);
                  setRegisterSelected(false);
                  setIsShowBtoomView(false);
                }}>
                <FastImage source={adminid_image} style={styles.outlookIcon} />
              </TouchableOpacity>
              <Text style={styles.socialLoginText}>Admin Id</Text>
            </View>
          </View>
        </>
      )}
      {!isShowBtoomView && (
        <View style={styles.registerBtnView}>
          <TouchableOpacity
            style={[styles.backButton]}
            onPress={() => {
              setIsLoginSelected(true);
              setIsShowBtoomView(true);
              setRegisterSelected(false);
              setIsShowLoginInputs(false);
            }}>
            <VectorImage source={back_arrow_ic} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.registerButton]}
            onPress={() => {
              if (isShowLoginInputs) {
                navigation.navigate('TabContainer');
              } else {
                registerConfirm();
              }
            }}>
            {isShowLoginInputs ? (
              <Text style={styles.buttonText}>Login</Text>
            ) : (
              <Text style={styles.buttonText}>Register</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
      {modalVisible && (
        <RegistrationConfirm
          isVisible={modalVisible}
          username="John Doe"
          loginId="Rohanpurohit267"
          password="ABcdt@#$sk123"
          onClose={closeModal}
        />
      )}
    </View>
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
    marginTop: moderateVerticalScale(35),
    marginBottom: 20,
    height: moderateVerticalScale(350),
    // alignItems:'center',
    justifyContent: 'center',
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
  registerButton: {
    // paddingVertical: 9,
    height: moderateVerticalScale(35),
    paddingHorizontal: moderateVerticalScale(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: PD_THEME_COLOR,
  },
  registerBtnView: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  backButton: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: PD_THEME_COLOR,
  },
  rememberMeText: {
    color: WHITE_COLOR,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default WelcomeScreen;
