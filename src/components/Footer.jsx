import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
	background:#002355;
	padding:20px;
	color: #ffffff;

`;
const Paragraph = styled.p`   
`;

const  Footer = props => {
	return(
		<StyledFooter>
			<Paragraph className='footer-title'>Created by David Gatica | 2021</Paragraph>
		</StyledFooter>
		
	);

}



export default Footer;