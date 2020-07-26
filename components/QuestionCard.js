import React, {Component} from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {CARD_BACKGROUND, HEADLINE, PARAGRAPH, SECONDARY} from "../utils/colors";
import CustomButton from "./CustomButton";

class QuestionCard extends Component {
   constructor(props) {
      super(props);
      const flipAnimationValue = new Animated.Value(0);
      flipAnimationValue.addListener(({value}) => {
         this.setState({currentAnimationValue: value});
      });
      this.state = {
         currentAnimationValue: 0,
         flipAnimationValue,
         frontCardInterpolate: flipAnimationValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
         }),
         backCardInterpolate: flipAnimationValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
         })
      };
   }

   flipCard() {
      const {flipAnimationValue, currentAnimationValue} = this.state;
      if (currentAnimationValue >= 90) {
         Animated.spring(flipAnimationValue, {
            toValue: 0,
            friction: 8,
            tension: 10,
            useNativeDriver: true
         }).start();
      } else {
         Animated.spring(flipAnimationValue, {
            toValue: 180,
            friction: 8,
            tension: 10,
            useNativeDriver: true
         }).start();
      }

   }

   render() {
      const {frontCardInterpolate, backCardInterpolate, currentAnimationValue} = this.state;
      const frontAnimatedStyle = {
         transform: [
            {rotateY: frontCardInterpolate}
         ]
      };
      const backAnimatedStyle = {
         zIndex: currentAnimationValue >= 90 ? 1 : -1,
         transform: [
            {rotateY: backCardInterpolate}
         ]
      };
      const FlipButton = (
         <TouchableOpacity onPress={() => this.flipCard()} style={styles.flipButton}>
            <MaterialIcons name="flip" size={24} color={SECONDARY}/>
         </TouchableOpacity>
      );

      const {item = {}} = this.props;
      const {question, answer} = item;

      return (
         <View style={styles.container}>
            <View>
               <Animated.View style={[styles.card, styles.frontCard, frontAnimatedStyle]}>
                  {FlipButton}
                  <View style={styles.contentContainer}>
                     <View style={styles.textContainer}>
                        <Text style={styles.question}>{question}</Text>
                     </View>
                     <CustomButton type='primary' title='Correct' style={{marginBottom: 20}} onPress={this.startQuiz}/>
                     <CustomButton type='secondary' title='Incorrect' onPress={this.addCard}/>
                  </View>
               </Animated.View>
               <Animated.View style={[backAnimatedStyle, styles.card, styles.backCard]}>
                  {FlipButton}
                  <View style={styles.contentContainer}>
                     <View style={styles.textContainer}>
                        <Text style={styles.answer}>{answer}</Text>
                     </View>
                  </View>
               </Animated.View>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      padding: 100,
      paddingLeft: 10,
      paddingRight: 10,
   },
   card: {
      width: 300,
      height: 500,
      backfaceVisibility: 'hidden',
      backgroundColor: CARD_BACKGROUND,
      borderRadius: 10,
   },
   flipButton: {
      padding: 10,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
   },
   contentContainer: {
      flex: 1,
      padding: 20,
   },
   textContainer: {
      flex: 1,
   },
   question: {
      fontSize: 22,
      color: HEADLINE,
   },
   answer: {
      fontSize: 16,
      color: PARAGRAPH,
   },
   frontCard: {},
   backCard: {
      position: "absolute",
      top: 0,
   },
});

export default QuestionCard;
