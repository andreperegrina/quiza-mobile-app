import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {PRIMARY_BUTTON_TEXT, CARD_BACKGROUND, SECONDARY} from "../utils/colors";

const CustomTextInput = (props) => {
   return (
      <TextInput
         {...props}
         placeholderTextColor={SECONDARY}
         style={[styles.input, props.style]}
      />
   );
};
const styles = StyleSheet.create({
   input: {
      color: PRIMARY_BUTTON_TEXT,
      backgroundColor: CARD_BACKGROUND,
      height: 50,
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,
      borderColor: 'transparent',
      borderWidth: 1,
   }
});

export default CustomTextInput;
