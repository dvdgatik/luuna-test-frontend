import React, {useState, useEffect} from 'react';
import Repos from '../components/Repos';
import getData from '../utils/getData.js';
const API = 'https://api.github.com/repositories?q=page:1';
const ReposContainer = props => {
	const [repos, setRepos] =  useState([]);

	useEffect(()=> {
		getData(API)
		.then(response => {
			setRepos(response);
		});

		//console.log(repos);

	}, [repos]);
	return(<Repos repos={repos}/>);
}

export default ReposContainer;