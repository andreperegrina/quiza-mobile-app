import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HEADLINE, PARAGRAPH} from "../utils/colors";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import TextButton from "./TextButton";

class NewDeck extends Component {
   addCard = () => {
      const {route} = this.props;
      const {id} = route.params;
      this.props.navigation.navigate('New Question', {id: id});
   };
   startQuiz = () => {
      const {route} = this.props;
      const {id} = route.params;
      this.props.navigation.navigate('New Question', {id: id});
   };

   render() {
      return (
         <View style={styles.container}>
            <Text style={styles.title}>Udacity deck</Text>
            <Text style={styles.subTitle}>3 Cards</Text>
            <PrimaryButton title='Start quiz' style={styles.button} styleTouchable={styles.touchable}
                           onPress={this.startQuiz}/>
            <SecondaryButton title='Add card' style={styles.button} styleTouchable={styles.touchable}
                             onPress={this.addCard}/>
            <TextButton title='Delete deck' style={styles.buttonDelete} styleTouchable={styles.touchable}
                             onPress={this.addCard}/>
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
      marginBottom: 10
   },
   subTitle: {
      color: PARAGRAPH,
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 30
   },
   button: {
      marginTop: 20,
      alignSelf: 'stretch'
   },
   buttonDelete: {
      marginTop: 30,
      alignSelf: 'stretch'
   },
   touchable: {
      alignSelf: 'stretch'
   },

});

export default NewDeck;
