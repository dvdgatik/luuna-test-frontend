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
    	text-decoration: none;
  	};
  	&:after{
		    content: '';
		    display: block;
		    width: 0;
		    height: 2px;
		    margin: 5px auto;
		    background: #fff;
		    transition: width .3s;
  	};
  	&:hover: {
  		&:after {
  			width: 100%;
    		transition: width .3s;
  		}
  	}
`;  

const Header = props => {
	return(
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



