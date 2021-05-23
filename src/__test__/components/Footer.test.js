import React from 'react';
import Footer from '../../components/Footer';
import {create} from 'react-test-renderer';
import {mount, shallow} from 'enzyme';
import styled from 'styled-components'
import 'jest-styled-components';


describe('<Footer>',()=>{
	const footer = mount(<Footer/>);
	test('Render of Footer Component', () => {
		expect(footer.length).toEqual(1);
	});
	test('Render of title', ()=> {
		expect(footer.find(".footer-title > p").text()).toEqual('Created by David Gatica | 2021');
	});
});


describe('Footer Snapshot', () => {
	test('Check UI of Footer Component',()=>{
		const footer = create(<Footer/>);
		expect(footer.toJSON()).toMatchSnapshot();
	})
});