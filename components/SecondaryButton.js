import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SECONDARY_BUTTON, SECONDARY_BUTTON_TEXT} from "../utils/colors";

const SecondaryButton = ({title, onPress, ...props}) => {
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
      backgroundColor: SECONDARY_BUTTON
   },
   text: {
      textAlign: 'center',
      color: SECONDARY_BUTTON_TEXT
   }
});

export default SecondaryButton;
