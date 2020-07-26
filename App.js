import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import DeckList from "./components/DeckList";
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons, Feather} from '@expo/vector-icons';
import NewDeck from "./components/NewDeck";
import {BACKGROUND, CARD_BACKGROUND, HIGHLIGHT, SECONDARY} from "./utils/colors";
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import DeckDetail from "./components/DeckDetail";
import NewQuestion from "./components/NewQuestion";


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
         tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="cards" size={size} color={color}/>
      }}/>
      <Tab.Screen name="New Deck" component={NewDeck} options={{
         tabBarIcon: ({color, size}) => <Feather name="plus-circle" size={size} color={color}/>
      }}/>
   </Tab.Navigator>
)

export default function App() {
   return (
      <NavigationContainer theme={NavigationTheme}>
         <View style={styles.container}>
            <CustomStatusBar backgroundColor={BACKGROUND} barStyle='light'/>
            <Stack.Navigator>
               <Stack.Screen name="Home" component={TabNavigatorHome} options={{headerShown: false}}/>
               <Stack.Screen name="Deck Detail" component={DeckDetail}
                             options={{
                                headerStyle: {
                                   backgroundColor: BACKGROUND,
                                   color: 'white',
                                },
                                headerBackTitle: '',
                                headerTintColor: 'white'
                             }}/>
               <Stack.Screen name="New Question" component={NewQuestion}
                             options={{
                                headerStyle: {
                                   backgroundColor: BACKGROUND,
                                   color: 'white',
                                },
                                headerBackTitle: '',
                                headerTintColor: 'white'
                             }}/>
            </Stack.Navigator>
         </View>
      </NavigationContainer>
   );
}


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: BACKGROUND,
   },
});
