import React from 'react';
import styled from 'styled-components';

const H2 = styled.h2 `
	text-align: center;
	padding:20px;
`
const NotFound = props => {
	return(
		<H2>404 Not Found</H2>
	);
}


export default NotFound;