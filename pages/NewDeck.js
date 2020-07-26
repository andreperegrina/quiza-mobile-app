import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HEADLINE} from "../utils/colors";
import PrimaryButton from "../components/PrimaryButton";
import CustomTextInput from "../components/CustomTextInput";

class NewDeck extends Component {
   create = () => {
      const id=1;
      this.props.navigation.navigate('Deck Detail', {id});
   };

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <CustomTextInput placeholder={'Name of the deck'} style={{alignSelf: 'stretch'}}/>
            <PrimaryButton title='Create Deck' style={{marginTop: 30}} onPress={this.create}/>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
   },
   title: {
      color: HEADLINE,
      fontSize: 36,
      textAlign: 'center',
      marginBottom: 30
   },
});

export default NewDeck;
