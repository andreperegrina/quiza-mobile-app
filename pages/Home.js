import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {loadDecks} from "../actions";
import {BACKGROUND, CARD_BACKGROUND, HIGHLIGHT, SECONDARY} from "../utils/colors";
import DeckDetail from "./DeckDetail";
import NewQuestion from "./NewQuestion";
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import Constants from "expo-constants";
import {StatusBar} from "expo-status-bar";
import {enableScreens} from "react-native-screens";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {connect} from "react-redux";
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import Quiz from "./Quiz";

const Tab = createBottomTabNavigator();

const CustomStatusBar = ({backgroundColor, ...props}) => (
   <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgrounColor={backgroundColor} {...props}/>
   </View>
);

const NavigationTheme = {
   ...DefaultTheme,
   colors: {
      ...DefaultTheme.colors,
      background: BACKGROUND,
   },
};

enableScreens();
const Stack = createNativeStackNavigator();

const TabNavigatorHome = () => (
   <Tab.Navigator tabBarOptions={{
      inactiveTintColor: SECONDARY,
      activeTintColor: HIGHLIGHT,
      style: {
         backgroundColor: CARD_BACKGROUND
      }
   }}>
      <Tab.Screen activeTintColor={'red'} name="Decks" component={DeckList} options={{
         tabBarIcon: ({color, size}) => <Feather name="inbox" size={size} color={color}/>
      }}/>
      <Tab.Screen name="New Deck" component={NewDeck} options={{
         tabBarIcon: ({color, size}) => <Feather name="plus-circle" size={size} color={color}/>
      }}/>
   </Tab.Navigator>
);

class Home extends Component {

   componentDidMount() {
      this.props.loadDecks();
   }

   render() {
      return (
         <NavigationContainer theme={NavigationTheme}>
            <View style={styles.container}>
               <CustomStatusBar backgroundColor={BACKGROUND} barStyle='light'/>
               <Stack.Navigator>
                  <Stack.Screen name="Home" component={TabNavigatorHome} options={{headerShown: false}}/>
                  <Stack.Screen name="Deck Detail" component={DeckDetail}
                                options={StackScreenStyle}/>
                  <Stack.Screen name="New Question" component={NewQuestion}
                                options={StackScreenStyle}/>
                  <Stack.Screen name="Quiz" component={Quiz}
                                options={StackScreenStyle}/>
               </Stack.Navigator>
            </View>
         </NavigationContainer>
      );
   }
}

const StackScreenStyle = {
   headerStyle: {
      backgroundColor: BACKGROUND,
      color: 'white',
   },
   headerBackTitle: '',
   headerTintColor: 'white'
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: BACKGROUND,
   },
});

const mapDispatchToProps = {
   loadDecks
};
export default connect(undefined, mapDispatchToProps)(Home);
