import React, {Component} from 'react';
import {KeyboardAvoidingView, Text, StyleSheet} from 'react-native';
import {HEADLINE} from "../utils/colors";
import Field from "../components/Field";
import {addQuestion} from "../actions";
import {connect} from "react-redux";
import CustomButton from "../components/CustomButton";

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
      const {route, navigation, addQuestion} = this.props;
      const {id} = route.params;
      this.setState({question: '', answer: ''});
      addQuestion(id, {question, answer}).then(() => navigation.goBack()).catch((e) => {
         console.error(e);
      });
   };

   render() {
      const {question, answer} = this.state;
      return (
         <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={styles.title}>Add new card</Text>
            <Field placeholder={'Question'} style={{alignSelf: 'stretch'}} value={question}
                   onChangeText={(e) => this.updateState('question', e)}/>
            <Field placeholder={'Answer'} style={{alignSelf: 'stretch'}} value={answer}
                   onChangeText={(e) => this.updateState('answer', e)}/>
            <CustomButton type='primary' title='Submit' style={{marginTop: 30}} onPress={this.submit}/>
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

const mapDispatchToProps = {
   addQuestion
};

export default connect(undefined, mapDispatchToProps)(NewQuestion);
