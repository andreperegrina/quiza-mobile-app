import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomTextInput from "./CustomTextInput";
import {HEADLINE} from "../utils/colors";

class NewDeck extends Component {
   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.title}>Create new deck</Text>
            <CustomTextInput placeholder={'Name of the deck'}/>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
   },
   title: {
      color: HEADLINE,
      fontSize: 28,
      textAlign: 'center'
   },
});

export default NewDeck;
