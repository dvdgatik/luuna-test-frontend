import React from 'react';
import {mount, shallow} from 'enzyme';
import Header from '../../components/Header';
import styled from 'styled-components'
import {create} from 'react-test-renderer';
import 'jest-styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
describe('<Header>',()=>{
	const header = shallow(<Router><Header/></Router>);
	test('Render of Header Component', () => {
		expect(header.length).toEqual(1);
	});
});

describe('Header Snapshot', () => {
	test('Check UI of Header Component',()=>{
		const header = create(<Router><Header/></Router>);
		expect(header.toJSON()).toMatchSnapshot();
	})
});