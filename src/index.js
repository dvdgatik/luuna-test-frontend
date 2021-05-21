import React from 'react';
import styled from 'styled-components';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './assets/styles/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Header';
let root = document.querySelector('#root');

const Title = styled.section`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
render(
	<Home/>
	, root);