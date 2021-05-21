import React from 'react';
import styled from 'styled-components';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/styles/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
import Users from './containers/UsersContainer';
import Repos from './containers/ReposContainter';
import App from './components/App';
import NotFound from './components/NotFound';
let root = document.querySelector('#root');

render(
	<BrowserRouter>
		<Home>
			<Switch>
				<Route exact path='/users' component={Users} />
				<Route exact path='/repositories' component={Repos}/>
				<Route path='/' component={App} />
				<Route component={NotFound}/>
			</Switch>
		</Home>
	</BrowserRouter>
	, root);