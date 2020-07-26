import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {HEADLINE, MAIN, PARAGRAPH} from "../utils/colors";


const EmptyStateMessage = ({title, subtitle, icon}) => {
   return (
      <View style={styles.container}>
         {icon != null && icon}
         {icon == null && <Feather name='inbox' color={MAIN} size={80}/>}
         <Text style={styles.title}>{title}</Text>
         <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
   );
};
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   title: {
      fontSize: 28,
      marginTop:10,
      marginBottom:5,
      color: HEADLINE
   },
   subTitle: {
      fontSize: 18,
      color: PARAGRAPH,
      textAlign: 'center'
   }
});

export default EmptyStateMessage;
