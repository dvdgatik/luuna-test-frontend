import React from 'react';
import Section from './Section';
import Repos from '../containers/ReposContainter';
import Users from '../containers/UsersContainer';
const App = props => {
	return(
		<>
			<Section className={'col-xs-12 col-sm-12 col-md-6 col-lg-6'}>
				<Repos/>
			</Section>
			<Section className={'col-xs-12 col-sm-12 col-md-6 col-lg-6'}>
				<Users/>
			</Section>
		</>
	);
}

export default App;