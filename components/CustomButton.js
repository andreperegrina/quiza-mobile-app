import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
   PRIMARY_BUTTON,
   PRIMARY_BUTTON_TEXT,
   SECONDARY_BUTTON,
   SECONDARY_BUTTON_TEXT,
   TERTIARY_BUTTON,
   TERTIARY_BUTTON_TEXT
} from "../utils/colors";

const CustomButton = ({title, onPress, type, styleTouchable, ...props}) => {
   const buttonStyle = type === 'primary' ? styles.primaryButton : type === "secondary" ? styles.secondaryButton : styles.tertiaryButton;
   const textStyle = type === 'primary' ? styles.primaryText : type === "secondary" ? styles.secondaryText : styles.tertiaryText;
   return (
      <TouchableOpacity style={styleTouchable} onPress={onPress}>
         <View {...props} style={[styles.button, buttonStyle, props.style]}>
            <Text style={[textStyle, styles.text]}>{title}</Text>
         </View>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   button: {
      padding: 20,
      paddingTop: 15,
      paddingBottom: 15,
      borderRadius: 8,
   },
   primaryButton: {
      backgroundColor: PRIMARY_BUTTON
   },
   secondaryButton: {
      backgroundColor: SECONDARY_BUTTON
   },
   tertiaryButton: {
      backgroundColor: TERTIARY_BUTTON
   },
   text: {
      textAlign: 'center',
   },
   primaryText: {
      color: PRIMARY_BUTTON_TEXT
   },
   secondaryText: {
      color: SECONDARY_BUTTON_TEXT
   },
   tertiaryText: {
      color: TERTIARY_BUTTON_TEXT
   }
});

export default CustomButton;
