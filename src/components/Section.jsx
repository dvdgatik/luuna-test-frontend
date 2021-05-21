import React from 'react';
import styled from 'styled-components';


const StyledSection = styled.section`
	padding-top:10px;
`;

const Section = props =>  {
	return (
		<>
		<StyledSection className={props.className}>
		{props.children}
		</StyledSection>
		</>
	);
}



export default Section;