import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import QuestionCard from "../components/QuestionCard";
import {connect} from "react-redux";

class Quiz extends Component {
   state = {
      currentQuestionIndex: 0,
   };

   render() {
      const {currentQuestionIndex} = this.state;
      const {deck = {}} = this.props;
      const {questions} = deck;
      const currentQuestion = questions[currentQuestionIndex];
      return (
         <View style={styles.container}>
            <QuestionCard item={currentQuestion}/>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
});

const mapStateToProps = (state, {route}) => {
   const {id} = route.params;
   return {
      deck: state[id]
   }
};

export default connect(mapStateToProps)(Quiz);
