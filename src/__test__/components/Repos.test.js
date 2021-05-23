import React from 'react';
import {mount, shallow} from 'enzyme';
import ReposContainer from '../../containers/ReposContainter';
import Repos from '../../components/Repos';
import {create} from 'react-test-renderer';


describe('<ReposContainter/>',()=>{
	const repos_cont = shallow(<ReposContainer/>);
	test('Render of ReposContainer Component',()=>{
		expect(repos_cont.length).toEqual(1);
	});

	const repos = shallow(<Repos/>);
	test('Render of Repos Component', ()=>{
		expect(repos.length).toEqual(1);
	});


});



describe('Repos Snapshot', () => {
	test('Check UI of Repos Component',()=>{
		const repos = create(<Repos/>);
		expect(repos.toJSON()).toMatchSnapshot();
	})
});