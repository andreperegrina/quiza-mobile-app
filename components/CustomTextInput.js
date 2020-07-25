import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {BUTTON_TEXT, SECONDARY} from "../utils/colors";

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
      color: BUTTON_TEXT,
      height: 50,
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,
      borderColor: SECONDARY,
      borderWidth: 1,
   }
});

export default CustomTextInput;
