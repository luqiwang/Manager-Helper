import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {  createStore , applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
	componentWillMount() {
		const config = {
	    apiKey: "AIzaSyCXOcF0Mi30wV06TjuYFZeYroH3H6Q60-U",
	    authDomain: "manager-2b0ed.firebaseapp.com",
	    databaseURL: "https://manager-2b0ed.firebaseio.com",
	    projectId: "manager-2b0ed",
	    storageBucket: "manager-2b0ed.appspot.com",
	    messagingSenderId: "599695638743"
	  	};
	  	firebase.initializeApp(config);
	}

	render() {
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

		return (
			<Provider store = {store}>
			 	<Router />
			</Provider>
		)
	}
}

export default App;