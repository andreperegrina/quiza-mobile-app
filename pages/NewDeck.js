import React, {Component} from 'react';
import {KeyboardAvoidingView, Text, StyleSheet, Keyboard} from 'react-native';
import {HEADLINE} from "../utils/colors";
import CustomTextInput from "../components/CustomTextInput";
import {addDeck} from "../actions";
import {connect} from "react-redux";
import CustomButton from "../components/CustomButton";

class NewDeck extends Component {
   state = {
      title: ''
   };

   updateState = (property, value) => {
      this.setState({[property]: value})
   };

   create = () => {
      Keyboard.dismiss();
      const {title} = this.state;
      this.setState({title: ''});
      this.props.addDeck({title}).then(({response}) => {
         this.props.navigation.navigate('Deck Detail', {id: response.id});
      }).catch((e) => {
         console.error(e);
      });
   };

   render() {
      const {title} = this.state;
      return (
         <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={styles.title}>What is the title of your new deck?</Text>
            <CustomTextInput value={title} placeholder={'Title of the deck'} style={{alignSelf: 'stretch'}}
                             onChangeText={(e) => this.updateState('title', e)}/>
            <CustomButton type='primary' title='Create Deck' style={{marginTop: 30}} onPress={this.create}/>
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

const mapDistpatchToProps = {
   addDeck
};

export default connect(undefined, mapDistpatchToProps)(NewDeck);
