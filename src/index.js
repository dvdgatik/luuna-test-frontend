import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../public/assets/bootstrap/dist/css/bootstrap.min.css';

let root = document.querySelector('#root');

const h1 = <h1>Hola Mundo</h1>;
render(h1, root);