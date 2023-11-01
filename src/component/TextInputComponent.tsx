import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {DARK_GRAY_COLOR, WHITE_COLOR} from '../utils/colors';

const TextInputComponent = ({fieldNameText, onTextInput}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fieldNameText}>{fieldNameText}</Text>
      <View style={styles.inputBoxView}>
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            onTextInput(text);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  fieldNameText: {
    color: WHITE_COLOR,
    fontSize: 15,
    fontWeight: '500',
  },
  inputBoxView: {
    width: '95%',
    height: 30,
    borderBottomWidth: 1,
    borderColor: '#00CC6680',
    justifyContent: 'flex-end',
    paddingHorizontal:3
  },
  inputBox: {
    color: DARK_GRAY_COLOR,
    height: 22,
  },
});

export default TextInputComponent;
