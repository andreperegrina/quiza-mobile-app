import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from "./store";
import Home from "./pages/Home";
import {setLocalNotification} from "./utils/notifications";


class App extends Component {
   componentDidMount() {
      setLocalNotification();
   }

   render() {
      return (
         <Provider store={store}>
            <Home/>
         </Provider>
      );
   }
}

