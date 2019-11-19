import React, { Component } from 'react';
import {  Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import Artists from './pages/artists/Artists';
import Login from './pages/Login/Login';
import Header from './components/Header';
import Albums from './pages/albums/Albums';
import CallBack from './components/CallBack';

class App extends Component {

    

    render() {
		return (
			<div className="app">
				<Header />
				<Switch>
					<Route exact path="/" component={Artists} />
					<Route exact path="/artist/:artist_id" component={Albums} />
					<Route exact path="/login" render={() => (localStorage.getItem('access_token') ? <Redirect to="/" /> : <Login />)} />
					<Route path='/callback' component={CallBack} />
				</Switch>
			</div>
		);
	}
}

export default App;
