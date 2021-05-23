import React from 'react';
import {mount, shallow} from 'enzyme';
import UsersContainer from '../../containers/UsersContainer';
import Users from '../../components/Users';
import {create} from 'react-test-renderer';


describe('<UsersContainer/>',()=>{
	const users_cont = shallow(<UsersContainer/>);
	test('Render of UsersContainer Component',()=>{
		expect(users_cont.length).toEqual(1);
	});

	const users = shallow(<Users/>);
	test('Render of Users Component', ()=>{
		expect(users.length).toEqual(1);
	});


});



describe('Users Snapshot', () => {
	test('Check UI of Users Component',()=>{
		const users = create(<Users/>);
		expect(users.toJSON()).toMatchSnapshot();
	})
});