import React from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {back_arrow_ic, registerSuccessImage} from '../utils/images';
import {
  BALCK_COLOR,
  LIGHT_BLACK_COLOR,
  PD_THEME_COLOR,
  TRANSPARENT_BACKGROUNF_COLOR,
  WHITE_COLOR,
} from '../utils/colors';
import VectorImage from 'react-native-vector-image';
import {moderateVerticalScale} from 'react-native-size-matters';
import {Poppins_Regular} from '../utils/fonts';
import FastImage from 'react-native-fast-image';

const RegistrationConfirm = ({
  isVisible,
  username,
  loginId,
  password,
  onClose,
}) => {
  return (
    <Modal transparent={true} visible={isVisible} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.card}>
          <Text style={styles.title}>Congratulations {username}</Text>
          <Text style={styles.description}>You are now registered!</Text>
          <FastImage source={registerSuccessImage} style={styles.image} />
          <View style={styles.loginInfoView}>
            <Text style={styles.loginInfo}>
              Login ID: <Text style={styles.loginInfoValue}>{loginId}</Text>
            </Text>
            <Text style={styles.loginInfo}>
              Password: <Text style={styles.loginInfoValue}>{password}</Text>
            </Text>
          </View>

          <View style={styles.registerBtnView}>
            <TouchableOpacity style={[styles.backButton]} onPress={onClose}>
              <VectorImage source={back_arrow_ic} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.registerButton]}
              onPress={() => {}}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: TRANSPARENT_BACKGROUNF_COLOR,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    fontFamily: Poppins_Regular,
  },
  description: {
    fontSize: 10,
    fontWeight: '400',
    fontFamily: Poppins_Regular,
    color: LIGHT_BLACK_COLOR,
  },
  image: {
    width: moderateVerticalScale(100),
    height: moderateVerticalScale(100),
    marginVertical: moderateVerticalScale(27),
  },
  loginInfoView: {
    marginBottom: 20,
  },
  loginInfo: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '600',
    fontFamily: Poppins_Regular,
  },
  loginInfoValue: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '400',
    fontFamily: Poppins_Regular,
    color: LIGHT_BLACK_COLOR,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
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
  registerButton: {
    height: moderateVerticalScale(35),
    paddingHorizontal: moderateVerticalScale(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: PD_THEME_COLOR,
  },
  buttonText: {
    color: WHITE_COLOR,
    fontWeight: '600',
    fontSize: 15,
    fontFamily: Poppins_Regular,
  },
});

export default RegistrationConfirm;
