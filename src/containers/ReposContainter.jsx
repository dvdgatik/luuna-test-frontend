import React, {useState, useEffect} from 'react';
import Repos from '../components/Repos';
import getData from '../utils/getData.js';
import Search from '../components/Search';
const API = 'https://api.github.com/search/repositories?q=page:1';
const ReposContainer = props => {
	const [repos, setRepos] =  useState([]);
	const [repoinput, setRepoInput] =  useState('');
	const [notfound, setNotFound] = useState('');

	const handleSearch = event => {
		event.persist();
		setRepoInput(event.target.value);
		console.log(repoinput);
	}
	const handleClick = () => {
		if(repoinput != '') {
			getData(API+'&q='+repoinput)
		.then(res => {
			console.log(res.data.items);
			setRepos(res.data.items);
			setNotFound('');
			console.log(repos);
		})
		.catch(err => {
			setNotFound('Repo Not Found');
			console.log(notfound);
		});
		}
		
	}
	useEffect(()=> {
		let isMounted = true;

		getData(API)
		.then(response => {
			if(isMounted) {
			setRepos(response.data.items);
			}
		})
		.catch(err=>err);

		return () => {
      		// clean up
      		isMounted = false;
    	};

		//console.log(repos);

	}, [repoinput]);
	return(
		<>
		<Search handleClick={handleClick} handleSearch={handleSearch} name_input={'Repos...'}/>
		<Repos notfound={notfound} repos={repos}/>
		</>
	);
}

export default ReposContainer;