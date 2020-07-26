import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {HEADLINE, PARAGRAPH} from "../utils/colors";
import TextButton from "../components/TextButton";
import {connect} from "react-redux";
import {removeDeck} from "../actions";
import CustomButton from "../components/CustomButton";

class NewDeck extends Component {
   addCard = () => {
      const {route} = this.props;
      const {id} = route.params;
      this.props.navigation.navigate('New Question', {id: id});
   };
   startQuiz = () => {
      const {route} = this.props;
      const {id} = route.params;
      this.props.navigation.navigate('Quiz', {id: id});
   };

   deleteDeck = () => {
      const {deck, removeDeck} = this.props;
      removeDeck(deck.id).then(() => {
         this.props.navigation.goBack();
      });
   };

   render() {
      const {deck = {}} = this.props;
      const {title, questions = []} = deck;
      return (
         <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{questions.length} Cards</Text>
            <CustomButton type='primary' title='Start quiz' style={styles.button} styleTouchable={styles.touchable}
                           onPress={this.startQuiz}/>
            <CustomButton type='secondary' title='Add card' style={styles.button} styleTouchable={styles.touchable}
                             onPress={this.addCard}/>
            <TextButton title='Delete deck' style={styles.buttonDelete} styleTouchable={styles.touchable}
                        onPress={this.deleteDeck}/>
         </View>
      );
   }
}

const
   styles = StyleSheet.create({
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

const mapStateToProps = (state, {route}) => {
   const {id} = route.params;
   return {
      deck: state[id]
   }
};

const mapDispatchToProps = {
   removeDeck
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDeck);
