import React, {useState, useEffect} from 'react';
import Users from '../components/Users';
import getData from '../utils/getData.js';
import Search from '../components/Search';
import Title from '../components/Title';
const API = 'https://api.github.com/users';

const UsersContainer = props => {
	const [users, setUsers] = useState([]);
	const [userinput, setUserInput] =  useState('');
	const [notfound, setNotFound] = useState('');
	const handleSearch = event => {
		event.persist();
		setUserInput(event.target.value);
		//console.log(userinput);
	}
	const handleClick = (e) => {
		event.preventDefault();
		getData(API+'/'+userinput)
		.then(res => {
			//console.log([res.data]);
			setUsers([res.data]);
			setNotFound('');
			//console.log(users);
		})
		.catch(err => {
			setNotFound('User Not Found');
			//console.log(notfound);
		});
	}
	useEffect(()=>{
		let isMounted = true;

		getData(API)
		.then(response => {
			if(isMounted) {
				setUsers(response.data);
			}
		})
		.catch(err=>err);

		return () => {
      		// clean up
      		isMounted = false;
    	};


	}, [userinput]);



	



	return(
		<>
		<Title title={'Users'}/>
		<Search  handleClick={handleClick} handleSearch={handleSearch} name_input={'Users...'}/>
		<Users notfound={notfound} users={users}/>
		</>
	)
}

export default UsersContainer;