import React from 'react';
import Section from './Section';
import ReposContainter from '../containers/ReposContainter';
import UsersContainer from '../containers/UsersContainer';
const App = props => {
	return(
		<>
			<Section className={'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
				<UsersContainer/>
			</Section>
		</>
	);
}

export default App;