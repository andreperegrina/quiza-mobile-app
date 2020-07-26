import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {SECONDARY, TERTIARY} from "../utils/colors";

const TextButton = ({title, onPress, ...props}) => {
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
   },
   text: {
      textAlign: 'center',
      color: SECONDARY
   }
});

export default TextButton;
