import React, {useState, useEffect} from 'react';
import Repos from '../components/Repos';
import getData from '../utils/getData.js';
import Search from '../components/Search';
const API = 'https://api.github.com/repositories?q=page:1';
const ReposContainer = props => {
	const [repos, setRepos] =  useState([]);

	useEffect(()=> {
		let isMounted = true;

		getData(API)
		.then(response => {
			if(isMounted) {
			setRepos(response.data);
			}
		})
		.catch(err=>err);

		return () => {
      		// clean up
      		isMounted = false;
    	};

		//console.log(repos);

	}, [repos]);
	return(
		<>
		<Search name_input={'Repos...'}/>
		<Repos repos={repos}/>
		</>
	);
}

export default ReposContainer;