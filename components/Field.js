import React from 'react';
import {View, StyleSheet} from 'react-native';
import CustomTextInput from "./CustomTextInput";
import Label from "./Label";

const Field = ({label, ...props}) => {
   return (
      <View style={styles.container}>
         <Label text={label}/>
         <CustomTextInput{...props}/>
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
      alignSelf: 'stretch',
   }
});

export default Field;
