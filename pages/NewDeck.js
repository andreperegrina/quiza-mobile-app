import React, {Component} from 'react';
import {KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import {HEADLINE} from "../utils/colors";
import PrimaryButton from "../components/PrimaryButton";
import CustomTextInput from "../components/CustomTextInput";

class NewDeck extends Component {
   state = {
      name: ''
   };

   updateState = (property, value) => {
      this.setState({[property]: value})
   };

   create = () => {
      // TODO: change ID to the database ID
      const {name} = this.state;
      const id = 1;
      this.setState({name: ''});
      // TODO: save deck in the database
      this.props.navigation.navigate('Deck Detail', {id});
   };

   render() {
      const {name} = this.state;
      return (
         <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <CustomTextInput value={name} placeholder={'Name of the deck'} style={{alignSelf: 'stretch'}}
                             onChange={(e) => this.updateState('name', e.target.value)}/>
            <PrimaryButton title='Create Deck' style={{marginTop: 30}} onPress={this.create}/>
         </KeyboardAvoidingView>
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
