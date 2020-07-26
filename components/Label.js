import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {PRIMARY_BUTTON_TEXT} from "../utils/colors";

const Label = ({text}) => {
   return (
      <Text style={styles.label}>{text}</Text>
   );
};

const styles = StyleSheet.create({
   label: {
      fontSize:16,
      marginBottom: 10,
      color: PRIMARY_BUTTON_TEXT
   }
});

export default Label;
