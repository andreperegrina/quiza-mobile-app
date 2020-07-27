import React, {Component} from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {CARD_BACKGROUND, HEADLINE, PARAGRAPH, SECONDARY} from "../utils/colors";
import CustomButton from "./CustomButton";
import {isPortrait} from "../utils";

class QuestionCard extends Component {
   constructor(props) {
      super(props);
      const flipAnimationValue = new Animated.Value(0);
      flipAnimationValue.addListener(({value}) => {
         this.setState({currentAnimationValue: value});
      });
      Dimensions.addEventListener('change', () => {
         this.setState({
            orientation: isPortrait() ? 'portrait' : 'landscape'
         });
      });
      this.state = {
         orientation: isPortrait() ? 'portrait' : 'landscape',
         currentAnimationValue: 0,
         flipAnimationValue,
         frontCardInterpolate: flipAnimationValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '180deg'],
         }),
         backCardInterpolate: flipAnimationValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['180deg', '360deg']
         }),
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

   setScore(answer) {
      const {totalQuestions} = this.props;
      const {score, totalAnswer} = this.state;
      const newState = {
         totalAnswer: totalAnswer + 1
      };
      if (answer) {
         newState.score = score + 1
      }
      this.setState(newState);
      if (totalAnswer === totalQuestions) {

      }
   }

   render() {
      const {frontCardInterpolate, backCardInterpolate, currentAnimationValue, orientation} = this.state;
      const {item = {}, currentQuestionNumber, totalQuestions, setAnswer} = this.props;
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

      const {question, answer} = item;

      const windowWidth = Dimensions.get('window').width;
      const windowHeight = Dimensions.get('window').height;
      const cardStyle = {
         width: (orientation === "portrait" ? windowWidth - 50 : windowWidth - 150),
         height: (orientation === "portrait" ? 400 : windowHeight - 100),
      };

      return (
         <View style={styles.container}>
            <View>
               <Animated.View style={[cardStyle, styles.card, styles.frontCard, frontAnimatedStyle]}>
                  {FlipButton}
                  <View style={styles.contentContainer}>
                     <View style={styles.textContainer}>
                        <Text style={styles.question}>{question}</Text>
                     </View>
                     <CustomButton type='primary' title='Correct' style={{marginBottom: 15}}
                                   onPress={() => setAnswer(true)}/>
                     <CustomButton type='quaternary' title='Incorrect' style={{marginBottom: 15}}
                                   onPress={() => setAnswer(false)}/>
                     <View style={styles.textQuestionNumbersContainer}>
                        <Text style={styles.textQuestionNumbers}>{currentQuestionNumber}</Text>
                        <Text style={styles.textQuestionNumbers}>/</Text>
                        <Text style={styles.textQuestionNumbers}>{totalQuestions}</Text>
                     </View>
                  </View>
               </Animated.View>
               <Animated.View style={[cardStyle, backAnimatedStyle, styles.card, styles.backCard]}>
                  {FlipButton}
                  <View style={styles.contentContainer}>
                     <View style={styles.textContainer}>
                        <Text style={styles.label}>Answer:</Text>
                        <Text style={styles.answer}>{answer}</Text>
                     </View>
                     <View style={styles.textQuestionNumbersContainer}>
                        <Text style={styles.textQuestionNumbers}>{currentQuestionNumber}</Text>
                        <Text style={styles.textQuestionNumbers}>/</Text>
                        <Text style={styles.textQuestionNumbers}>{totalQuestions}</Text>
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
      fontSize: 26,
      color: HEADLINE,
   },
   textQuestionNumbersContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
   },
   textQuestionNumbers: {
      fontSize: 16,
      color: SECONDARY,
   },
   label: {
      fontSize: 16,
      marginBottom: 8,
      color: PARAGRAPH,
   },
   answer: {
      fontSize: 22,
      color: HEADLINE,
   },
   frontCard: {},
   backCard: {
      position: "absolute",
      top: 0,
   },
});

export default QuestionCard;
