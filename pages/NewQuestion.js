import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {HEADLINE} from "../utils/colors";
import PrimaryButton from "../components/PrimaryButton";
import Field from "../components/Field";

class NewQuestion extends Component {
   submit = () => {
      const {navigation} = this.props;
      navigation.goBack();
   };

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.title}>Add new card</Text>
            <Field placeholder={'Question'} style={{alignSelf: 'stretch'}}/>
            <Field placeholder={'Answer'} style={{alignSelf: 'stretch'}}/>
            <PrimaryButton title='Submit' style={{marginTop: 30}} onPress={this.submit}/>
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

export default NewQuestion;
