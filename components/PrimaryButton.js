import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {PRIMARY_BUTTON, PRIMARY_BUTTON_TEXT} from "../utils/colors";

const PrimaryButton = ({title, onPress, ...props}) => {
   return (
      <TouchableOpacity style={props.styleTouchable} onPress={onPress}>
         <View {...props} style={[styles.button, props.style]}>
            <Text style={styles.text}>{title}</Text>
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
      backgroundColor: PRIMARY_BUTTON
   },
   text: {
      textAlign: 'center',
      color: PRIMARY_BUTTON_TEXT
   }
});

export default PrimaryButton;
