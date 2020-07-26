import React, {Component} from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import DeckCard from "../components/DeckCard";
import {convertObjectToArray} from "../utils";
import {connect} from "react-redux";
import EmptyStateMessage from "../components/EmptyStateMessage";

class DeckList extends Component {

   handleItemClick = (id) => {
      this.props.navigation.navigate('Deck Detail', {id});
   };

   renderItems = ({item}) => (
      <TouchableOpacity onPress={() => this.handleItemClick(item.id)} style={{marginVertical: 8}}>
         <DeckCard key={item.id} {...item}/>
      </TouchableOpacity>
   );

   render() {
      const {decks} = this.props;
      const deckList = convertObjectToArray(decks);
      return (
         <View style={styles.container}>
            {deckList.length > 0 && <FlatList style={styles.list} data={deckList}
                                              renderItem={this.renderItems}/>}
            {deckList.length <= 0 && <EmptyStateMessage title='There are not decks available' subtitle='Please go to the create deck section. To create new one.'/>}
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
const mapStateToProps = (state) => {
   return ({
      decks: state
   })
};

export default connect(mapStateToProps)(DeckList);
