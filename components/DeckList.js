import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import DeckCard from "./DeckCard";

class DeckList extends Component {

   handleItemClick = (id) => {
      this.props.navigation.navigate('Deck Detail', {id});
   };

   renderItems = ({item}) => (
      <TouchableOpacity onPress={() => this.handleItemClick(item.id)}>
         <DeckCard key={item.id} {...item}/>
      </TouchableOpacity>
   );

   render() {
      return (
         <View style={styles.container}>
            <FlatList style={styles.list} data={[{id: '1', name: 'hola', cardsCount: 1}]}
                      renderItem={this.renderItems}/>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
   },
});

export default DeckList;
