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
		if (userinput != '') {
			getData(API+'/'+userinput)
			.then(res => {
				if (res.status == 200) {
					setUsers([res.data]);
					setNotFound('');
					console.clear();
				}
				//console.log([res.data]);
				//console.log(users)
			})
			.catch((err) => {
				
				if (err.response.status === 404) {
					console.clear();
					console.log(err.response.status);
					setNotFound('User Not Found');
					console.log("%cUser  not  found", "color:#ffff; background:#002355; font-size: 16pt");
				}
				
			});
		}
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