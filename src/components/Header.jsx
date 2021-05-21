import React from 'react'
//import {Link} from 'react-router-dom';
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

const Anchor = styled.a`
	display:inline-block;
	color: #ffffff;
	padding: 0 10px;
	font-size: 13pt;
	text-decoration: none;
	font-weight: bold;
	&:hover ${Anchor} {
    	color:#ffffff;
  	}


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
		<StyleHeader className="navbar-brand mb-0 h1">
			<Nav className="navbar">
				<Span>
					<Anchor src='/'>Luuna</Anchor>
				</Span>
				<Span>
					<Anchor  src='/users'>Users</Anchor>
					<Anchor  src='/repositories'>Repositories</Anchor>
				</Span>
			</Nav>
		</StyleHeader>
	);
}






export default Header;



