import React, {useState, useEffect} from 'react';
import Repos from '../components/Repos';
import getData from '../utils/getData.js';
import Search from '../components/Search';
import Title  from '../components/Title';
const API = 'https://api.github.com/search/repositories?q=page:1';
const ReposContainer = props => {
	const [repos, setRepos] =  useState([]);
	const [repoinput, setRepoInput] =  useState('');
	const [notfound, setNotFound] = useState('');

	const handleSearch = event => {
		event.persist();
		setRepoInput(event.target.value);
		//console.log(repoinput);
	}
	const handleClick = () => {
		if(repoinput != '') {
			getData(API+'&q='+repoinput)
		.then(res => {
			//console.log(res.data.total_count);
			if(res.data.total_count === 0){
				//console.log('Es cero');
				setNotFound('Repo Not Found');
			} else {
				setRepos(res.data.items);
				console.log('Hecho');
				setNotFound('');
			}
			//console.log(repos);
		})
		.catch(err => {
			setNotFound('Repo Not Found');
			//console.log(notfound);
			//console.log(err);
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
		.catch(err=>{
			//console.log('Limite de peticiones al API de github agotado, rate limit');
			//console.log(err);
			return err
		});

		return () => {
      		// clean up
      		isMounted = false;
    	};


	}, []);
	return(
		<>
		<Title title={'Repositories'}/>
		<Search handleClick={handleClick} handleSearch={handleSearch} name_input={'Repos...'}/>
		<Repos notfound={notfound} repos={repos}/>
		</>
	);
}

export default ReposContainer;