import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

 
const StyleHeader = styled.header`
	background: #002355;
	text-align: center;
	color:#ffffff;
	padding: 10px 20px;
`;

const Nav = styled.nav`
`;

const Span = styled.span`
	display:block;
`;

const Anchor = styled(Link)`
	display:inline-block;
	color: #ffffff;
	padding: 0 10px;
	font-size: ${props=>props.fontSize || '13pt' };
	text-decoration: none;
	font-weight: bold;
	&:hover ${Anchor} {
    	color:#ffffff;
  	};
`;  



const Header = props => {
	return(
		/*<header>
			<nav className="navbar">
				<span className="navbar-brand mb-0 h1">
				<a className='cool-link' src="/">Disease Classifier</a>
				</span>
				<span>See individual: 
				<a className='cool-link' src="/hypertension">Hypertension</a>
				<a className='cool-link' src="/kydney" >Kidney Desease</a>
				</span>
			</nav>
		</header>*/
		<StyleHeader>
			<Nav className="navbar">
				<Span className="navbar-brand mb-0 mr-0 h1">
					<Anchor fontSize='24pt' to='/'>Luuna</Anchor>
				</Span>
				<Span>
					<Anchor  to='/users'>Users</Anchor>
					<Anchor  to='/repositories'>Repositories</Anchor>
				</Span>
			</Nav>
		</StyleHeader>
	);
}






export default Header;



