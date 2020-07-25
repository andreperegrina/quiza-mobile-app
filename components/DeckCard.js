import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons';
import {CARD_BACKGROUND, HEADLINE, HIGHLIGHT, PARAGRAPH, SECONDARY} from '../utils/colors'

const DeckCard = ({name, cardsCount, icon}) => {
   return (
      <View style={styles.container}>
         <MaterialCommunityIcons style={styles.icon} name={icon ? icon : "card"} size={40} color={HIGHLIGHT}/>
         <View style={styles.textContainer}>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.cardsCountText}>{cardsCount} Cards</Text>
         </View>
         <Ionicons name="ios-arrow-forward" size={24} color={SECONDARY}/>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      height: 100,
      borderRadius: 4,
      backgroundColor: CARD_BACKGROUND,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      shadowRadius: 3,
      shadowOpacity: 0.8,
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
         width: 0,
         height: 3,
      }
   },
   textContainer: {
      flex: 1,
   },
   icon: {
      marginRight: 20,
   },
   nameText: {
      fontSize: 28,
      color: HEADLINE
   },
   cardsCountText: {
      fontSize: 18,
      color: PARAGRAPH
   }
});

export default DeckCard;
