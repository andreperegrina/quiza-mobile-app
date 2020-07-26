import React, {Component} from 'react';
import {KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import {HEADLINE} from "../utils/colors";
import PrimaryButton from "../components/PrimaryButton";
import Field from "../components/Field";

class NewQuestion extends Component {
   state = {
      question: '',
      answer: '',
   };

   updateState = (property, value) => {
      this.setState({[property]: value})
   };

   submit = () => {
      const {question, answer} = this.state;
      const {navigation} = this.props;
      this.setState({question: '', answer: ''});
      // TODO: save question in the database
      navigation.goBack();
   };

   render() {
      const {question, answer} = this.state;
      return (
         <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={styles.title}>Add new card</Text>
            <Field placeholder={'Question'} style={{alignSelf: 'stretch'}} value={question}
                   onChange={(e) => this.updateState('question', e.target.value)}/>
            <Field placeholder={'Answer'} style={{alignSelf: 'stretch'}} value={answer}
                   onChange={(e) => this.updateState('answer', e.target.value)}/>
            <PrimaryButton title='Submit' style={{marginTop: 30}} onPress={this.submit}/>
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

export default NewQuestion;
