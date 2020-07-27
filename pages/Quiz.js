import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import QuestionCard from "../components/QuestionCard";
import {connect} from "react-redux";
import {HEADLINE, MAIN, PARAGRAPH} from "../utils/colors";
import CustomButton from "../components/CustomButton";
import EmptyStateMessage from "../components/EmptyStateMessage";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {clearLocalNotifications, setLocalNotification} from "../utils/notifications";

class Quiz extends Component {
   state = {
      currentQuestionIndex: 0,
      score: 0,
   };

   componentDidMount() {
      clearLocalNotifications().then(setLocalNotification);
   }

   setScore = (answer) => {
      const {deck = {}} = this.props;
      const {questions} = deck;
      const totalQuestions = questions.length
      const {score, currentQuestionIndex} = this.state;
      const newState = {
         currentQuestionIndex: currentQuestionIndex < totalQuestions ? currentQuestionIndex + 1 : totalAnswer
      };
      if (answer) {
         newState.score = score + 1
      }
      this.setState(newState);
   };

   restartQuiz = () => {
      this.setState({
         currentQuestionIndex: 0,
         score: 0,
         totalAnswer: 0,
      });
   };
   goBackToDesk = () => {
      this.restartQuiz();
      this.props.navigation.goBack();
   };

   render() {
      const {currentQuestionIndex, score} = this.state;
      const {deck = {}} = this.props;
      const {questions} = deck;
      const totalQuestions = questions.length;
      const currentQuestion = questions[currentQuestionIndex];
      const isQuizCompleted = totalQuestions === currentQuestionIndex;
      const percentage = (score / totalQuestions * 100).toFixed(0);
      const isPerfectScore = score === totalQuestions;
      const messageTitle = isPerfectScore ? "You are awesome!" : "Don't give up!";
      const messageDescription = isPerfectScore ? "Congratulations you got all the answers!" : "You will do it better next time.";
      const isDeckEmpty = totalQuestions <= 0;

      return (
         <View style={styles.container}>

            {!isDeckEmpty && !isQuizCompleted && <QuestionCard item={currentQuestion}
                                                               currentQuestionNumber={currentQuestionIndex + 1}
                                                               totalQuestions={totalQuestions}
                                                               setAnswer={this.setScore}/>}
            {!isDeckEmpty && isQuizCompleted && (
               <View style={styles.scoreContainer}>
                  <Text style={styles.scoreText}>{percentage}%</Text>
                  <View style={styles.answersContainer}>
                     <Text style={styles.answerLabel}>{score}</Text>
                     <Text style={styles.answerLabel}> of </Text>
                     <Text style={styles.answerLabel}>{totalQuestions}</Text>
                  </View>
                  <View style={styles.messageContainer}>
                     <Text style={styles.messageTitle}>{messageTitle}</Text>
                     <Text style={styles.messageDescription}>{messageDescription}</Text>
                  </View>
                  <View style={styles.buttonsContainer}>
                     <CustomButton type='primary' title='Restart Quiz' style={{marginRight: 10}}
                                   onPress={this.restartQuiz}/>
                     <CustomButton type='secondary' title='Back to Deck'
                                   onPress={this.goBackToDesk}/>
                  </View>
               </View>
            )}
            {isDeckEmpty && (
               <View>
                  <EmptyStateMessage title="This deck is empty" subtitle='Please go back to add questions'
                                     icon={<MaterialCommunityIcons name="cards" size={80} color={MAIN}/>}/>
               </View>
            )}
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   scoreContainer: {},
   answersContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
   },
   scoreText: {
      fontSize: 90,
      color: HEADLINE,
      textAlign: 'center'
   },
   scoreLabel: {
      fontSize: 40,
      color: HEADLINE,
      textAlign: 'center'
   },
   answerLabel: {
      fontSize: 20,
      color: PARAGRAPH
   },
   messageContainer: {
      marginTop: 30,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 30,
   },
   messageTitle: {
      fontSize: 30,
      color: HEADLINE,
      marginBottom: 10
   },
   messageDescription: {
      fontSize: 20,
      color: PARAGRAPH,
      textAlign: 'center'
   },
   buttonsContainer: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
});

const mapStateToProps = (state, {route}) => {
   const {id} = route.params;
   return {
      deck: state[id]
   }
};

export default connect(mapStateToProps)(Quiz);
