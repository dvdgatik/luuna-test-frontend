import React from 'react';
import styled from 'styled-components';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/styles/bootstrap/dist/css/bootstrap.css';
import './assets/styles/Style.css';
import Home from './components/Home';
import Header from './components/Header';
import Users from './containers/UsersContainer';
import Repos from './containers/ReposContainter';
import App from './components/App';
import NotFound from './components/NotFound';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faSearch, faGithub } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faCheckSquare, faSearch);
let root = document.querySelector('#root');

render(
	<BrowserRouter>
		<Home>
			<Switch>
				<Route  exact path='/users' component={Users} />
				<Route  exact path='/repositories' component={Repos}/>
				<Route exact path='/' component={App} />
				<Route component={NotFound}/>
			</Switch>
		</Home>
	</BrowserRouter>
	, root);